import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryListRoutingModule } from './history-list-routing.module';
import { HistoryListComponent } from './pages/history-list.component';
import { SharedModule } from '@app/shared/shared.module';


@NgModule({
  declarations: [
    HistoryListComponent
  ],
  imports: [
    CommonModule,
    HistoryListRoutingModule,
    SharedModule
  ]
})
export class HistoryListModule { }
