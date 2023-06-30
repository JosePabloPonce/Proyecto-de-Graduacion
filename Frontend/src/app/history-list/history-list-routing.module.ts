import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryListComponent } from './pages/history-list.component';
import { NavbarComponent } from '@app/shared/navbar/navbar.component';

const routes: Routes = [
  {
    path:'',
    component: HistoryListComponent,
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
export class HistoryListRoutingModule { }
