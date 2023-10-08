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

  guardarDatos(): void {
    console.log('DATOS', this.listOfData);
    this.popupservice.saveData(this.listOfData, this.listOfData).subscribe({
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
  constructor(public dialogRef: MatDialogRef<PopupPredictComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private i18n: NzI18nService, private popupservice: PopupPredictService, private message: NzMessageService) {}

  ngOnInit(): void {
    
    this.updateEditCache();
    console.log('DATA', this.data)
  }
  onClose(): void {
    this.dialogRef.close();
  }

}
