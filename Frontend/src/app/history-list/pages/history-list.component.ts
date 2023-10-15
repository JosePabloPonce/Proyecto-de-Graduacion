import { Component, OnInit } from '@angular/core';
import { RandomUserService } from '../services/history-list.service';

import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { IDatosGenerales } from '@app/history-details/Interfaces/IDatosGenerales';

@Component({
  selector: 'app-history-list',
  templateUrl: './history-list.component.html',
  styleUrls: ['./history-list.component.scss'],
})
export class HistoryListComponent implements OnInit {
  results = 11;

  loading = true;

  listOfData: IDatosGenerales[] = [];

  getConteos(): void {
    this.loading = true;
    this.randomUserService.getConteos().subscribe((data) => {
      this.loading = false;
      console.log(data);
      this.listOfData = data;
    });
  }

  constructor(private randomUserService: RandomUserService) {}

  ngOnInit(): void {
    this.getConteos();
  }
}
