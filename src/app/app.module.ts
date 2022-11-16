import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  imports:      [ BrowserModule,ReactiveFormsModule, FormsModule, HttpClientModule],
  declarations: [ AppComponent,RegisterComponent ],
  bootstrap:    [ AppComponent,RegisterComponent ],
})
export class AppModule { }
