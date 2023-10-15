import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NzTableModule, NzTableQueryParams } from 'ng-zorro-antd/table';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { IConteos } from '@app/history-list/Interfaces/IConteos';
import { IDatosGenerales } from '@app/history-details/Interfaces/IDatosGenerales';
import { IConteoDeHuevecillos } from '@app/history-details/Interfaces/IConteoDeHuevecillos';
import { format, isValid } from 'date-fns';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { PopupPredictService } from './services/popupPredict.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { IPredicciones } from '@app/history-details/Interfaces/IPredicciones';
import { EggResponse } from '@app/history-details/Interfaces/IEgg';
import { ChangeDetectorRef } from '@angular/core';
import { PopupComponent } from '@app/popup/popup.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-popupPredict',
  templateUrl: './popupPredict.component.html',
  styleUrls: ['./popupPredict.component.scss']
})

export class PopupPredictComponent implements OnInit {

  
  listOfData: IPredicciones[] = [
    {
      id: 0,
      huevos_viables: this.data.huevosViables++,
      huevos_eclosionados: this.data.huevosEclosionados++,
      huevos_canoa: this.data.huevosEnCanoa++,
      F:0,
      temperatura:0,
      dias:0
    },  
  ];

  listOfPrediction: EggResponse[] = [
    {
      HV:0,
      HE:0,
      HEC:0
    }
    
  ]

  editCache: { [key: string]: { edit: boolean; data: IPredicciones } } = {};

  startEdit(id: number): void {
      this.editCache[id].edit = true;      
  }

  cancelEdit(id: number,  tabla: string): void {
    const index = this.listOfData.findIndex(item => item.id === id);
    this.editCache[id] = {
      data: { ...this.listOfData[index] },
      edit: false
    };
  }

  saveEdit(id: number): void {
      const index = this.listOfData.findIndex(item => item.id === id);
      Object.assign(this.listOfData[index], this.editCache[id].data);
      this.editCache[id].edit = false;
  }


  updateEditCache(): void {
    this.listOfData.forEach(item => {
      this.editCache[item.id] = {
        edit: false,
        data: { ...item }
      };
    });
  }

  predict(): void {
    console.log('DATOS:', this.listOfData)
    const data = [this.listOfData[0].huevos_viables,this.listOfData[0].huevos_eclosionados,this.listOfData[0].huevos_canoa,
    Number(this.listOfData[0].F),Number(this.listOfData[0].temperatura),Number(this.listOfData[0].dias)]
    this.popupservice.predict(data).subscribe({
      next: (response) => {
        // Mostrar mensaje de éxito
        this.message.create('success', 'Predicción realizada con éxito');
        this.listOfPrediction = [response as EggResponse, ...this.listOfPrediction.slice(1)];
        this.cdr.detectChanges();
        console.log('PREDICCION:',this.listOfPrediction[0])

        // Cerrar el diálogo
        //this.dialogRef.close();
      },
      error: (error) => {
        // Mostrar mensaje de error
        this.message.create('error', 'Error al realizar la predicción',);

        // Cerrar el diálogo
        this.dialogRef.close();
      }
    });
  }

  openPopup(): void {
    this.dialogRef.close();
    const dialogRef = this.dialog.open(PopupComponent, {
      panelClass: 'modal-container',
      disableClose: true,
      data: {
        huevosEnCanoa: this.listOfPrediction[0].HEC,
        huevosViables: this.listOfPrediction[0].HV,
        huevosEclosionados: this.listOfPrediction[0].HE,
      },
    });

    dialogRef.afterClosed().subscribe((result :any) => {
      console.log(`Dialog result: ${result}`);
    });
  }


  guardarDatos(): void {
    console.log('DATOS:', this.listOfData)
    const data = [this.listOfData[0].huevos_viables,this.listOfData[0].huevos_eclosionados,this.listOfData[0].huevos_canoa,
    Number(this.listOfData[0].F),Number(this.listOfData[0].temperatura),Number(this.listOfData[0].dias)]
    this.popupservice.predict(data).subscribe({
      next: (response) => {
        // Mostrar mensaje de éxito
        this.message.create('success', 'Datos guardados con éxito');
        this.listOfPrediction = [response as EggResponse, ...this.listOfPrediction.slice(1)];
        this.cdr.detectChanges();
        console.log('PREDICCION:',this.listOfPrediction[0])

        // Cerrar el diálogo
        //this.dialogRef.close();
      },
      error: (error) => {
        // Mostrar mensaje de error
        this.message.create('error', 'Error guardando datos',);

        // Cerrar el diálogo
        this.dialogRef.close();
      }
    });
  }
  constructor(public dialog: MatDialog,private cdr: ChangeDetectorRef,public dialogRef: MatDialogRef<PopupPredictComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private i18n: NzI18nService, private popupservice: PopupPredictService, private message: NzMessageService) {}

  ngOnInit(): void {
    
    this.updateEditCache();
    console.log('DATA', this.data)
  }
  onClose(): void {
    this.dialogRef.close();
  }

}
