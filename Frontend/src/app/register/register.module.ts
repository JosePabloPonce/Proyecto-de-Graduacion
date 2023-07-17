import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@app/shared/shared.module';
import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class RegisterModule { }
