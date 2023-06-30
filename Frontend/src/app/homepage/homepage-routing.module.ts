import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage.component';
import { NavbarComponent } from '@app/shared/navbar/navbar.component';

const routes: Routes = [
  {
    path: '', 
    component: HomepageComponent,
    children: [
      {
        path:'',
        component: NavbarComponent
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }
