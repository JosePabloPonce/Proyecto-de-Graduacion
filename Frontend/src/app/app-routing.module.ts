import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'home',
    loadChildren: () => import('@homepage/homepage.module').then(m => m.HomepageModule)

  },
  {
    path:'',
    redirectTo:'home',
    pathMatch: 'full'
  },
  {
    path:'about-us',
    loadChildren: () => import('@about-us/about-us.module').then(m => m.AboutUsModule)

  },
  {
    path:'history-list',
    loadChildren: () => import('@history-list/history-list.module').then(m => m.HistoryListModule)

  },
  {
    path:'history-details',
    loadChildren: () => import('@history-details/history-details.module').then(m => m.HistoryDetailsModule)

  },
  {
    path:'**',
    loadChildren: () => import('@page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
