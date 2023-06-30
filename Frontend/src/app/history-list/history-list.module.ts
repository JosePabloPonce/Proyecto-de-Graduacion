import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryListRoutingModule } from './history-list-routing.module';
import { HistoryListComponent } from './pages/history-list.component';


@NgModule({
  declarations: [
    HistoryListComponent
  ],
  imports: [
    CommonModule,
    HistoryListRoutingModule
  ]
})
export class HistoryListModule { }
