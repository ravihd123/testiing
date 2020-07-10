import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { ShowtabledataComponent } from './showtabledata/showtabledata.component';
import {  HttpClientModule } from '@angular/common/http';
import { ShowdetailsComponent } from './showdetails/showdetails.component'

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ShowtabledataComponent,
    ShowdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
