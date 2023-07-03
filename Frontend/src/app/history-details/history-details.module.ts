import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryDetailsRoutingModule } from './history-details-routing.module';
import { HistoryDetailsComponent } from './pages/history-details.component';
import { SharedModule } from '@app/shared/shared.module';


@NgModule({
  declarations: [
    HistoryDetailsComponent
  ],
  imports: [
    CommonModule,
    HistoryDetailsRoutingModule,
    SharedModule
  ]
})
export class HistoryDetailsModule { }
