import { Component, OnInit } from '@angular/core';
import { IDatosGenerales } from '../Interfaces/IDatosGenerales';
import { IConteoDeHuevecillos } from '../Interfaces/IConteoDeHuevecillos';

import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { format, isValid } from 'date-fns';
import { HistoryDetailsService } from '../services/history-details.service';
import { ActivatedRoute } from '@angular/router';

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

  idDatos: number = 0;

  loading = true;
  loading2 = true;

  startEdit(id: string, tabla:string): void {
    if(tabla === 'general'){
      this.editCache[id].edit = true;      
    } else if (tabla ==='conteo') {
      this.editCache2[id].edit = true;      
    }
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
      this.saveDatos(this.listOfData[index].id,this.listOfData[index]);
    } else if (tabla ==='conteo') {
      const index = this.listOfData2.findIndex(item => item.id === id);
      Object.assign(this.listOfData2[index], this.editCache2[id].data);
      this.editCache2[id].edit = false;
      this.saveConteos(this.listOfData2[index].id,this.listOfData2[index]);
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
    this.loading2 = true;
    this.service.getDatos(this.idDatos).subscribe(data => {
      console.log('DATOS:', data)
      this.listOfData = data
      console.log('CACHE 1:', this.editCache)
      this.updateEditCache();
      this.loading2 = false;
    })
  }

  getConteos(): void {
    this.loading = true;
    this.service.getConteos(this.idDatos).subscribe(data => {
      console.log('CONTEOS:', data)
      this.listOfData2 = data
      console.log('LISTA CONTEO:', this.listOfData2)
      console.log('CACHE 2:', this.editCache2)
      this.updateEditCache();
      this.loading = false;
    })
  }

  saveConteos(id:any,data:any): void {
    console.log('ID',id);
    console.log('data',data)
    this.service.editConteos(id,data).subscribe(data => {
      console.log('EDITADO', data)
    })
  }

  saveDatos(id:any,data:any): void {
    console.log('ID',id);
    console.log('data',data)
    this.service.editDatos(id,data).subscribe(data => {
      console.log('EDITADO', data)
    })
  }


  constructor(private i18n: NzI18nService, private service: HistoryDetailsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id']; // El '+' convierte el id de string a number
      console.log(id); // Aquí tienes el id que pasaste con routerLink
      this.idDatos = id;
    });
    
    this.getDatos();
    this.getConteos();
  }
}
