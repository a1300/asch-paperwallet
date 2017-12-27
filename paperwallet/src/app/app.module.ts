import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//qr
import { NgxQRCodeComponent } from './QRCodeContainer/QRCodeDisplay/qrcodedisplay.component';


//components
import { AppComponent } from './app.component';
import { QRCodeContainerComponent } from './QRCodeContainer/qrcodecontainer.component';
import { FootComponent } from './Foot/foot.component';

@NgModule({
  declarations: [
    AppComponent,
    QRCodeContainerComponent,
    FootComponent,
    NgxQRCodeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
