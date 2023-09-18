import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryDetailsRoutingModule } from './history-details-routing.module';
import { HistoryDetailsComponent } from './pages/history-details.component';
import { SharedModule } from '@app/shared/shared.module';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { FormsModule } from '@angular/forms';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import es from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';

registerLocaleData(es);


@NgModule({
  declarations: [
    HistoryDetailsComponent
  ],
  imports: [
    CommonModule,
    HistoryDetailsRoutingModule,
    SharedModule,
    NzTableModule,
    NzPaginationModule,
    FormsModule,
    NzPopconfirmModule,
    NzDatePickerModule
  ]
})
export class HistoryDetailsModule { }
