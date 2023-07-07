import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NzTableModule } from 'ng-zorro-antd/table';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
