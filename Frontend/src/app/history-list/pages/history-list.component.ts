import { Component, OnInit } from '@angular/core';
import { IConteos } from '../Interfaces/IConteos';
import { RandomUserService } from '../services/history-list.service';

import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { IDatosGenerales } from '@app/history-details/Interfaces/IDatosGenerales';

@Component({
  selector: 'app-history-list',
  templateUrl: './history-list.component.html',
  styleUrls: ['./history-list.component.scss']
})
export class HistoryListComponent implements OnInit {
  results = 11;

  listOfRandomUser: IConteos[] = [];
  loading = true;

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
    {
      id: '1',
      cepa: 'John Brown',
      generacion: '32',
      codigo_crianza: '3',
      especie: 'Aegipty',
      codigo_responsable: '324',
      total_huevos_intactos: 45
    },    {
      id: '1',
      cepa: 'John Brown',
      generacion: '32',
      codigo_crianza: '3',
      especie: 'Aegipty',
      codigo_responsable: '324',
      total_huevos_intactos: 45
    },    {
      id: '1',
      cepa: 'John Brown',
      generacion: '32',
      codigo_crianza: '3',
      especie: 'Aegipty',
      codigo_responsable: '324',
      total_huevos_intactos: 45
    },    {
      id: '1',
      cepa: 'John Brown',
      generacion: '32',
      codigo_crianza: '3',
      especie: 'Aegipty',
      codigo_responsable: '324',
      total_huevos_intactos: 45
    },    {
      id: '1',
      cepa: 'John Brown',
      generacion: '32',
      codigo_crianza: '3',
      especie: 'Aegipty',
      codigo_responsable: '324',
      total_huevos_intactos: 45
    },    {
      id: '1',
      cepa: 'John Brown',
      generacion: '32',
      codigo_crianza: '3',
      especie: 'Aegipty',
      codigo_responsable: '324',
      total_huevos_intactos: 45
    },    {
      id: '1',
      cepa: 'John Brown',
      generacion: '32',
      codigo_crianza: '3',
      especie: 'Aegipty',
      codigo_responsable: '324',
      total_huevos_intactos: 45
    },    {
      id: '1',
      cepa: 'John Brown',
      generacion: '32',
      codigo_crianza: '3',
      especie: 'Aegipty',
      codigo_responsable: '324',
      total_huevos_intactos: 45
    },    {
      id: '1',
      cepa: 'John Brown',
      generacion: '32',
      codigo_crianza: '3',
      especie: 'Aegipty',
      codigo_responsable: '324',
      total_huevos_intactos: 45
    },    {
      id: '1',
      cepa: 'John Brown',
      generacion: '32',
      codigo_crianza: '3',
      especie: 'Aegipty',
      codigo_responsable: '33324',
      total_huevos_intactos: 45
    },
  ];

  loadDataFromServer(results: number): void {
    this.loading = true;
    this.randomUserService.getUsers( results).subscribe(data => {
      this.loading = false;
      this.listOfRandomUser = data.results;
    });
  }

  constructor(private randomUserService: RandomUserService) { }

  ngOnInit(): void {
    this.loadDataFromServer(this.results);
  }

}
