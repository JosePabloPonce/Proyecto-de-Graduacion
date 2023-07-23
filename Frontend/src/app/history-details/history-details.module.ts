import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryDetailsRoutingModule } from './history-details-routing.module';
import { HistoryDetailsComponent } from './pages/history-details.component';
import { SharedModule } from '@app/shared/shared.module';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';


@NgModule({
  declarations: [
    HistoryDetailsComponent
  ],
  imports: [
    CommonModule,
    HistoryDetailsRoutingModule,
    SharedModule,
    NzTableModule,
    NzPaginationModule
  ]
})
export class HistoryDetailsModule { }
