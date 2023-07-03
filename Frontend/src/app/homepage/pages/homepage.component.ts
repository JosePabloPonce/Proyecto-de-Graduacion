import { Component, OnInit, Renderer2  } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  assetPath: string | undefined;
  assetPath2: string | undefined;
  assetPath3: string | undefined;
  assetPath4: string | undefined;
  
  isDragging = false;



  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.assetPath = `${document.baseURI}assets/huevos.png`;
    this.assetPath2 = `${document.baseURI}assets/flecha.png`;
    this.assetPath3 = `${document.baseURI}assets/huevos2.png`;
    this.assetPath4 = `${document.baseURI}assets/camara.png`;

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
      const selectedFile = files[0];
      // Aquí puedes hacer algo con la imagen seleccionada, como subirla al servidor
      console.log('Imagen seleccionada:', selectedFile);
    }
  }

  // Función para abrir el explorador de archivos al hacer clic en el div
  abrirExploradorArchivos() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.style.display = 'none';

    fileInput.addEventListener('change', (event: any) => {
      const selectedFile = event.target.files[0];
      // Aquí puedes hacer algo con la imagen seleccionada, como subirla al servidor
      console.log('Imagen seleccionada:', selectedFile);
  
    });

    document.body.appendChild(fileInput);
    fileInput.click();
  }

}
