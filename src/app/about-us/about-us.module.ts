import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './pages/about-us.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [AboutUsComponent],
  imports: [CommonModule, AboutUsRoutingModule, SharedModule],
})
export class AboutUsModule {}
