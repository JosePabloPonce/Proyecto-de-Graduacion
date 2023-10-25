import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('@homepage/homepage.module').then((m) => m.HomepageModule),
    ...canActivate(() => redirectUnauthorizedTo(['/login'])),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('@login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('@register/register.module').then((m) => m.RegisterModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'about-us',
    loadChildren: () =>
      import('@about-us/about-us.module').then((m) => m.AboutUsModule),
    ...canActivate(() => redirectUnauthorizedTo(['/login'])),
  },
  {
    path: 'history-list',
    loadChildren: () =>
      import('@history-list/history-list.module').then(
        (m) => m.HistoryListModule
      ),
    ...canActivate(() => redirectUnauthorizedTo(['/login'])),
  },
  {
    path: 'history-details/:id',
    loadChildren: () =>
      import('@history-details/history-details.module').then(
        (m) => m.HistoryDetailsModule
      ),
    ...canActivate(() => redirectUnauthorizedTo(['/login'])),
  },
  {
    path: '**',
    loadChildren: () =>
      import('@page-not-found/page-not-found.module').then(
        (m) => m.PageNotFoundModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
