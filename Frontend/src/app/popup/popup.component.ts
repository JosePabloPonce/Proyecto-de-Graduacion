import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NzTableModule, NzTableQueryParams } from 'ng-zorro-antd/table';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { IConteos } from '@app/history-list/Interfaces/IConteos';
import { IDatosGenerales } from '@app/history-details/Interfaces/IDatosGenerales';
import { IConteoDeHuevecillos } from '@app/history-details/Interfaces/IConteoDeHuevecillos';
import { format, isValid } from 'date-fns';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { PopupService } from './services/popup.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { PopupPredictComponent } from '@app/popupPredict/popupPredict.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})

export class PopupComponent implements OnInit {

  
  listOfData: IDatosGenerales[] = [
    {
      id: '',
      cepa: '',
      generacion: '',
      codigo_crianza: '',
      especie: '',
      codigo_responsable: '',
      total_huevos_intactos: 0
    },  
  ];


  listOfData2: IConteoDeHuevecillos[] = [];

  editCache: { [key: string]: { edit: boolean; data: IDatosGenerales } } = {};
  editCache2: { [key: string]: { edit: boolean; data: IConteoDeHuevecillos } } = {};

  huevosEnCanoa = 0;
  huevosViables = 0;
  huevosEclosionados = 0;


  openPopup(): void {
    console.log('ENTRO A OPEN POPUP')
    const dialogRef = this.dialog.open(PopupPredictComponent,{
      panelClass: 'modal-container',
      disableClose: true,
      data: {
        huevosEnCanoa: this.listOfData2[0].huevos_canoa ,
        huevosViables: this.listOfData2[0].huevos_intactos ,
        huevosEclosionados: this.listOfData2[0].huevos_eclosionados
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  startEdit(id: string, tabla:string): void {
    if(tabla === 'general'){
      this.editCache[id].edit = true;      
    } else if (tabla ==='conteo') {
      this.editCache2[id].edit = true;      
    }
  }

  cancelEdit(id: string,  tabla: string): void {
    if(tabla === 'general'){
    const index = this.listOfData.findIndex(item => item.id === id);
    this.editCache[id] = {
      data: { ...this.listOfData[index] },
      edit: false
    };
  } else if (tabla ==='conteo') {
    const index = this.listOfData2.findIndex(item => item.id === id);
    this.editCache2[id] = {
      data: { ...this.listOfData2[index] },
      edit: false
    };
  }
  }

  saveEdit(id: string, tabla: string): void {
    if(tabla === 'general'){
      const index = this.listOfData.findIndex(item => item.id === id);
      Object.assign(this.listOfData[index], this.editCache[id].data);
      this.editCache[id].edit = false;
    } else if (tabla ==='conteo') {
      const index = this.listOfData2.findIndex(item => item.id === id);
      Object.assign(this.listOfData2[index], this.editCache2[id].data);
      this.editCache2[id].edit = false;
    }
  }


  updateEditCache(): void {
    this.listOfData.forEach(item => {
      this.editCache[item.id] = {
        edit: false,
        data: { ...item }
      };
    });

    this.listOfData2.forEach(item => {
      this.editCache2[item.id] = {
        edit: false,
        data: { ...item }
      };
    });

  }

  updateHuevos() {
    this.listOfData2[0].huevos_canoa = this.data.huevosEnCanoa;
    this.listOfData2[0].huevos_eclosionados = this.data.huevosEclosionados;
    this.listOfData2[0].huevos_intactos = this.data.huevosViables;

  }


  onDateChange(id: string, newDateValue: Date, variable: String): void {
    if(variable === 'fecha_colocacion'){
      if (newDateValue && isValid(newDateValue)) {
          const formattedDate = format(newDateValue, 'yyyy-MM-dd');
          this.editCache2[id].data.fecha_colocacion = formattedDate;
      } else {
          const currentDate = new Date();
          this.editCache2[id].data.fecha_colocacion = format(currentDate, 'yyyy-MM-dd');
      }
  } else if(variable === 'fecha_retiro'){
    if (newDateValue && isValid(newDateValue)) {
      const formattedDate = format(newDateValue, 'yyyy-MM-dd');
      this.editCache2[id].data.fecha_retiro = formattedDate;
  } else {
      const currentDate = new Date();
      this.editCache2[id].data.fecha_retiro = format(currentDate, 'yyyy-MM-dd');
  }
  }
} 

  guardarDatos(): void {
    console.log('DATOS', this.listOfData);
    console.log('CONTEO', this.listOfData2);
    this.popupservice.saveData(this.listOfData, this.listOfData2).subscribe({
      next: (response) => {
        // Mostrar mensaje de éxito
        this.message.create('success', 'Datos guardados con éxito');

        // Cerrar el diálogo
        this.dialogRef.close();
      },
      error: (error) => {
        // Mostrar mensaje de error
        this.message.create('error', 'Error guardando datos',);

        // Cerrar el diálogo
        this.dialogRef.close();
      }
    });
  }

  predict(): void {
    console.log('ENTRO A PREDICT')
        this.openPopup(); 
        this.dialogRef.close(); 
  }
  constructor(public dialogRef: MatDialogRef<PopupComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private i18n: NzI18nService, private popupservice: PopupService, private message: NzMessageService,  public dialog: MatDialog) {}

  ngOnInit(): void {
    
    const currentDate = new Date();
    const updatedData = {
      id: '',
      id_user: 0, 
      codigo_sustrato: ' ',
      fecha_colocacion:  format(currentDate, 'yyyy-MM-dd'),
      fecha_retiro: format(currentDate, 'yyyy-MM-dd'),
      huevos_intactos: this.data.huevosViables, 
      huevos_eclosionados: this.data.huevosEclosionados,
      huevos_canoa: this.data.huevosEnCanoa,
      total_huevos: this.data.huevosEnCanoa + this.data.huevosEclosionados + this.data.huevosViables,
      generacion: ' ',
      responsable: ' ',
      id_datos: 0
    };
    this.listOfData2.push(updatedData);
    this.updateEditCache();
  }
  onClose(): void {
    this.dialogRef.close();
  }

}
