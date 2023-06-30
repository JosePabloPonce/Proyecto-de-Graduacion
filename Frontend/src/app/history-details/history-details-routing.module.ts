import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryDetailsComponent } from './pages/history-details.component';
import { NavbarComponent } from '@app/shared/navbar/navbar.component';

const routes: Routes = [
  {
    path:'',
    component: HistoryDetailsComponent,
    children: [
      {
        path:'',
        component: NavbarComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoryDetailsRoutingModule { }
