import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NzI18nModule, es_ES } from 'ng-zorro-antd/i18n';
import { NZ_I18N } from 'ng-zorro-antd/i18n';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {provideAuth,getAuth} from '@angular/fire/auth'
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '@environments/environment';
import { ReactiveFormsModule } from '@angular/forms';
import { PopupComponent } from './popup/popup.component';
import { SharedModule } from '@app/shared/shared.module';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { FormsModule } from '@angular/forms';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import es from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzConfig, NZ_CONFIG } from 'ng-zorro-antd/core/config';
import { PopupPredictComponent } from './popupPredict/popupPredict.component';
import { SafeUrlPipe } from './popup/url.pipe';

const ngZorroConfig: NzConfig = {
  message: { nzTop: '55px' },
};
registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
    PopupComponent,
    PopupPredictComponent,
    SafeUrlPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NzI18nModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(()=> getAuth()),
    SharedModule,
    NzTableModule,
    NzPaginationModule,
    FormsModule,
    NzPopconfirmModule,
    NzDatePickerModule,
    NzMessageModule

  ],
  providers: [{ provide: NZ_I18N, useValue: es_ES },  { provide: NZ_CONFIG, useValue: ngZorroConfig }],
  bootstrap: [AppComponent]
})
export class AppModule { }
