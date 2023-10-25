import { Component, OnInit, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '@app/popup/popup.component';
import { RoboflowService } from '../services/roboflow.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  assetPath: string | undefined;
  assetPath2: string | undefined;
  assetPath3: string | undefined;
  assetPath4: string | undefined;
  selectedFiles: File[] = [];
  processedImages: string[] = [];
  returnedImages: any[] = [];

  huevosEnCanoa = 0;
  huevosViables = 0;
  huevosEclosionados = 0;
  detections: any[] = [];

  isDragging = false;
  showUploadProgress = false;
  uploadComplete = false;

  processingBatch: number = 0;
  totalBatches: number = 0;

  constructor(
    private renderer: Renderer2,
    public dialog: MatDialog,
    private roboflowService: RoboflowService
  ) {}

  ngOnInit(): void {
    this.assetPath = `${document.baseURI}assets/huevos.png`;
    this.assetPath2 = `${document.baseURI}assets/flecha.png`;
    this.assetPath3 = `${document.baseURI}assets/huevos2.png`;
    this.assetPath4 = `${document.baseURI}assets/camara.png`;
  }

  processData(data: any[]) {
    for (let item of data) {
      switch (item.class) {
        case 'huevos en canoa':
          this.huevosEnCanoa++;
          break;
        case 'huevos viables':
          this.huevosViables++;
          break;
        case 'huevos eclosionados':
          this.huevosEclosionados++;
          break;
      }
    }
  }

  // Función para calcular la altura del bounding box usando los puntos:
  calculateHeight(prediction: any): number {
    return Math.abs(prediction.points[1].y - prediction.points[0].y);
  }

  // Función para controlar el evento 'dragover'
  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.isDragging = true;
  }

  // Función para controlar el evento 'drop'
  onDrop(event: DragEvent) {
    event.preventDefault();
    this.isDragging = false;
    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      this.selectedFiles = Array.from(files); // <-- Cambio para manejar múltiples archivos
      this.showUploadProgress = true;
      this.uploadComplete = false; // Restablecer el estado de uploadComplete

      // Simulación de carga de imagen (reemplaza con tu lógica de carga real)
      setTimeout(() => {
        // Lógica de carga completa
        this.showUploadProgress = false;
        this.uploadComplete = true;
      }, 2000);
    }
  }

  resizeImage(base64Str: string): Promise<string> {
    return new Promise((resolve, reject) => {
      let img = new Image();
      img.src = base64Str;
      img.onload = () => {
        let canvas = document.createElement('canvas');
        const MAX_WIDTH = 1500;
        const MAX_HEIGHT = 1500;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }

        canvas.width = width;
        canvas.height = height;
        let ctx = canvas.getContext('2d');
        ctx?.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL('image/jpeg', 1.0));
      };

      img.onerror = (error) => {
        reject(error);
      };
    });
  }

  base64ToFile(base64: string, filename: string): File {
    const arrayBuffer = new Uint8Array(
      atob(base64.split(',')[1])
        .split('')
        .map((char) => char.charCodeAt(0))
    );
    return new File([arrayBuffer], filename, { type: 'image/jpeg' });
  }

  // Asumiendo que this.results es un array donde almacenarás los resultados.
  results: any[] = [];

  continuar(): void {
    this.results = [];
    this.processedImages = []; // Inicializar la lista de imágenes procesadas

    if (!this.selectedFiles || this.selectedFiles.length === 0) {
      console.error('No se seleccionó ningún archivo.');
      return;
    }

    const BATCH_SIZE = 5;

    // Esta función procesa un lote y devuelve una promesa
    const processBatch = (filesBatch: File[]): Promise<any[]> => {
      const batchPromises = [];

      for (const file of filesBatch) {
        // Primero, obtenemos y redimensionamos la imagen
        const resizedImagePromise = this.getBase64FromFile(file)
          .then((base64image: string) => this.resizeImage(base64image))
          .then((resizedImage: string) => {
            return this.base64ToFile(resizedImage, file.name);
          });

        // Usamos el archivo redimensionado para analyzeImage
        const analyzePromise = resizedImagePromise.then((resizedFile) => {
          return this.roboflowService.analyzeImage(resizedFile).toPromise();
        });

        // También usamos el archivo redimensionado para returnImage
        const returnImagePromise = resizedImagePromise.then((resizedFile) => {
          return this.roboflowService.returnImage(resizedFile).toPromise()
            .then((blob) => {
              const imageURL = URL.createObjectURL(blob);
              return imageURL;
            });
        });

        batchPromises.push(Promise.all([analyzePromise, returnImagePromise]));
      }

      return Promise.all(batchPromises);
    };

    // Esta función procesa todos los lotes de manera secuencial
    const processAllBatches = async (allFiles: File[]) => {
      const totalBatches = Math.ceil(allFiles.length / BATCH_SIZE);
      this.totalBatches = totalBatches; // Establecer el total de lotes
      const groupedResults: any[] = []; // Para almacenar los resultados agrupados

      for (let i = 0; i < totalBatches; i++) {
        const startIdx = i * BATCH_SIZE;
        const endIdx = startIdx + BATCH_SIZE;
        this.processingBatch = i + 1; // Actualizar el lote actual

        const currentBatch = allFiles.slice(startIdx, endIdx);

        // Espera a que el lote actual termine antes de continuar al siguiente
        const batchResults = await processBatch(currentBatch);
        for (const [analyzeResult, imageBase64] of batchResults) {
          if (
            analyzeResult &&
            analyzeResult.predictions &&
            analyzeResult.predictions.length > 0
          ) {
            this.results.push(...analyzeResult.predictions);
            this.processedImages.push(imageBase64); // Guardar la imagen procesada
          } else {
            console.warn(
              'No se detectaron huevecillos en una de las imágenes.'
            );
          }
        }
        groupedResults.push(batchResults.map((r) => r[0].predictions)); // Aquí cambiamos para tomar solo las predicciones
      }
      this.processingBatch = 0; // Resetear cuando termina el proceso

      console.log('Resultados de todas las imágenes:', this.results);
      this.processData(this.results);
      this.detections = groupedResults;

      console.log(
        this.huevosEclosionados,
        this.huevosEnCanoa,
        this.huevosViables
      );

      if (this.results.length > 0) {
        this.openPopup();
      } else {
        alert('No se detectaron huevecillos en ninguna de las imágenes.');
        this.processingBatch = 0; // Resetear cuando termina el proceso
      }
    };

    processAllBatches(this.selectedFiles).catch((error) => {
      console.error('Error durante el procesamiento:', error);
      alert('Hubo un error durante el procesamiento de las imágenes.');
      this.processingBatch = 0; // Resetear cuando termina el proceso
    });
  }

  getBase64FromFile(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  }

  openPopup(): void {
    const dialogRef = this.dialog.open(PopupComponent, {
      panelClass: 'modal-container',
      disableClose: true,
      data: {
        huevosEnCanoa: this.huevosEnCanoa,
        huevosViables: this.huevosViables,
        huevosEclosionados: this.huevosEclosionados,
        detections: this.detections,
        images: this.selectedFiles,
        processed: this.processedImages,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
    this.huevosEnCanoa = 0;
    this.huevosViables = 0;
    this.huevosEclosionados = 0;
  }

  // Función para abrir el explorador de archivos al hacer clic en el div
  abrirExploradorArchivos() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.multiple = true; //multiples archivos
    fileInput.accept = 'image/*';
    fileInput.style.display = 'none';

    fileInput.addEventListener('change', (event: any) => {
      this.selectedFiles = Array.from(event.target.files);
      // subir imagenes ---
      this.showUploadProgress = true;
      this.uploadComplete = false; // Restablecer el estado de uploadComplete

      // Simulación de carga de imagen
      setTimeout(() => {
        // Lógica de carga completa
        this.showUploadProgress = false;
        this.uploadComplete = true;
      }, 2000);
    });

    document.body.appendChild(fileInput);
    fileInput.click();
  }
}
