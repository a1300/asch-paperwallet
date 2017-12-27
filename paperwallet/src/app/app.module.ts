import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//components
import { AppComponent } from './app.component';
import { QRCodeComponent } from './QRCode/qrcode.component';
import { FootComponent } from './Foot/foot.component';

@NgModule({
  declarations: [
    AppComponent,
    QRCodeComponent,
    FootComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
