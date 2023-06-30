import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us.component';
import { NavbarComponent } from '@app/shared/navbar/navbar.component';

const routes: Routes = [
  {
    path:'',
    component: AboutUsComponent,
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
export class AboutUsRoutingModule { }
