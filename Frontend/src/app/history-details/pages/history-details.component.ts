import { Component, OnInit } from '@angular/core';
import { IDatosGenerales } from '../Interfaces/IDatosGenerales';
import { IConteoDeHuevecillos } from '../Interfaces/IConteoDeHuevecillos';

import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { format, isValid } from 'date-fns';
import { HistoryDetailsService } from '../services/history-details.service';
@Component({
  selector: 'app-history-details',
  templateUrl: './history-details.component.html',
  styleUrls: ['./history-details.component.scss']
})
export class HistoryDetailsComponent implements OnInit {

  date = null;

  listOfData: IDatosGenerales[] = [];


  listOfData2: IConteoDeHuevecillos[] = [];

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

  getDatos(): void {
    this.service.getDatos().subscribe(data => {
      console.log('DATOS:', data)
      this.listOfData = data
    })
  }

  getConteos(): void {
    this.service.getConteos().subscribe(data => {
      console.log('CONTEOS:', data)
      this.listOfData2 = data
    })
  }


  constructor(private i18n: NzI18nService, private service: HistoryDetailsService) { }

  ngOnInit(): void {
    this.updateEditCache();
    this.getDatos();
    this.getConteos();
  }
}
