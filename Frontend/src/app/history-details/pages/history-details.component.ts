import { Component, OnInit } from '@angular/core';
import { IDatosGenerales } from '../Interfaces/IDatosGenerales';
import { IConteoDeHuevecillos } from '../Interfaces/IConteoDeHuevecillos';

import { NzTableQueryParams } from 'ng-zorro-antd/table';

@Component({
  selector: 'app-history-details',
  templateUrl: './history-details.component.html',
  styleUrls: ['./history-details.component.scss']
})
export class HistoryDetailsComponent implements OnInit {

  listOfData: IDatosGenerales[] = [
    {
      id: 1,
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
      id: 1,
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

  constructor() { }

  ngOnInit(): void {
  }

}
