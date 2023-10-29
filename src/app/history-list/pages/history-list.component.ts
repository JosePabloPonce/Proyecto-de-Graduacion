import { Component, OnInit } from '@angular/core';
import { RandomUserService } from '../services/history-list.service';

import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { IDatosGenerales } from '@app/history-details/Interfaces/IDatosGenerales';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';

@Component({
  selector: 'app-history-list',
  templateUrl: './history-list.component.html',
  styleUrls: ['./history-list.component.scss'],
})
export class HistoryListComponent implements OnInit {
  results = 11;

  loading = true;

  listOfData: IDatosGenerales[] = [];

  async getTotalHV(id: any): Promise<any> {
    const data = await this.randomUserService.getHV(id).toPromise();
    return data[0].HV;
  }

  async getConteos(): Promise<void> {
    this.loading = true;
    this.randomUserService.getConteos().subscribe((data) => {
      console.log(data);
      this.listOfData = data;
    });
    this.loading = false;
  }

  constructor(private randomUserService: RandomUserService) {}

  ngOnInit(): void {
    this.getConteos();
  }
}
