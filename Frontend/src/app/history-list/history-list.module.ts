import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryListRoutingModule } from './history-list-routing.module';
import { HistoryListComponent } from './pages/history-list.component';
import { SharedModule } from '@app/shared/shared.module';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';


@NgModule({
  declarations: [
    HistoryListComponent
  ],
  imports: [
    CommonModule,
    HistoryListRoutingModule,
    SharedModule,
    NzTableModule,
    NzPaginationModule,
    
  ]
})
export class HistoryListModule { }
