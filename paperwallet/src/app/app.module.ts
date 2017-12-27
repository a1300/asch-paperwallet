import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

//components
import { QRCodeComponent } from './QRCode/qrcode.component';

@NgModule({
  declarations: [
    AppComponent,
    QRCodeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
