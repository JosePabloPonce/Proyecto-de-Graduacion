import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNotFoundRoutingModule } from './page-not-found-routing.module';
import { PageNotFoundComponent } from './pages/page-not-found.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [CommonModule, PageNotFoundRoutingModule, SharedModule],
})
export class PageNotFoundModule {}
