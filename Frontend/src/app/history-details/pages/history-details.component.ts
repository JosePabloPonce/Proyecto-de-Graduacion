import { Component, OnInit } from '@angular/core';
import { IDatosGenerales } from '../Interfaces/IDatosGenerales';
import { IConteoDeHuevecillos } from '../Interfaces/IConteoDeHuevecillos';

import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { format, isValid } from 'date-fns';

@Component({
  selector: 'app-history-details',
  templateUrl: './history-details.component.html',
  styleUrls: ['./history-details.component.scss']
})
export class HistoryDetailsComponent implements OnInit {

  date = null;

  listOfData: IDatosGenerales[] = [
    {
      id: '1',
      cepa: 'John Brown',
      generacion: '32',
      codigo_crianza: '3',
      especie: 'Aegipty',
      codigo_responsable: '324',
      total_huevos_intactos: 45
    }, 
  ];


  listOfData2: IConteoDeHuevecillos[] = [
    {
      id: '1',
      codigo_sustrato: 'A',
      fecha_colocacion_sustrato: '2019-01-16',
      fecha_retiro_sustrato: '2019-01-16',
      huevos_intactos: 4,
      huevos_eclosionados: 6,
      huevos_en_canoa: 45,
      total_huevos: 45,
      generacion_filial: '32',
      responsable_conteo_huevos: '32',
    },
    {
      id: '2',
      codigo_sustrato: 'A',
      fecha_colocacion_sustrato: '2019-01-16',
      fecha_retiro_sustrato: '2019-01-16',
      huevos_intactos: 4,
      huevos_eclosionados: 6,
      huevos_en_canoa: 45,
      total_huevos: 45,
      generacion_filial: '32',
      responsable_conteo_huevos: '32',
    },    {
      id: '3',
      codigo_sustrato: 'A',
      fecha_colocacion_sustrato: '2019-01-16',
      fecha_retiro_sustrato: '2019-01-16',
      huevos_intactos: 4,
      huevos_eclosionados: 6,
      huevos_en_canoa: 45,
      total_huevos: 45,
      generacion_filial: '32',
      responsable_conteo_huevos: '32',
    },
  ];

  editCache: { [key: string]: { edit: boolean; data: IDatosGenerales } } = {};
  editCache2: { [key: string]: { edit: boolean; data: IConteoDeHuevecillos } } = {};

  startEdit(id: string, tabla:string): void {
    if(tabla === 'general'){
      this.editCache[id].edit = true;      
    } else if (tabla ==='conteo') {
      this.editCache2[id].edit = true;      
    }
  }

  onDateChange(id: string, newDateValue: Date, variable: String): void {
    if(variable === 'fecha_colocacion_sustrato'){
      if (newDateValue && isValid(newDateValue)) {
          const formattedDate = format(newDateValue, 'yyyy-MM-dd');
          this.editCache2[id].data.fecha_colocacion_sustrato = formattedDate;
      } else {
          const currentDate = new Date();
          this.editCache2[id].data.fecha_colocacion_sustrato = format(currentDate, 'yyyy-MM-dd');
      }
  } else if(variable === 'fecha_retiro_sustrato'){
    if (newDateValue && isValid(newDateValue)) {
      const formattedDate = format(newDateValue, 'yyyy-MM-dd');
      this.editCache2[id].data.fecha_retiro_sustrato = formattedDate;
  } else {
      const currentDate = new Date();
      this.editCache2[id].data.fecha_retiro_sustrato = format(currentDate, 'yyyy-MM-dd');
  }
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

    console.log(this.listOfData2)
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


  constructor(private i18n: NzI18nService) { }

  ngOnInit(): void {
    this.updateEditCache();
  }
}
