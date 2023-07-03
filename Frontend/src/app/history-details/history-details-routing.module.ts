import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryDetailsComponent } from './pages/history-details.component';

const routes: Routes = [
  {
    path:'',
    component: HistoryDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoryDetailsRoutingModule { }
