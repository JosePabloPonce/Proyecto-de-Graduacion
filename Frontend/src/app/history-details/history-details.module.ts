import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryDetailsRoutingModule } from './history-details-routing.module';
import { HistoryDetailsComponent } from './pages/history-details.component';


@NgModule({
  declarations: [
    HistoryDetailsComponent
  ],
  imports: [
    CommonModule,
    HistoryDetailsRoutingModule
  ]
})
export class HistoryDetailsModule { }
