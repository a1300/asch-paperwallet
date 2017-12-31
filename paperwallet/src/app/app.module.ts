import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//qr component
import { NgxQRCodeComponent } from './QRCodeContainer/QRCodeDisplay/qrcodedisplay.component';


//components
import { AppComponent } from './app.component';
import { QRCodeContainerComponent } from './QRCodeContainer/qrcodecontainer.component';
import { FootComponent } from './Foot/foot.component';
import { PrivateKeyInputComponent } from './QRCodeContainer/PrivateKeyInput/privatekeyinput.component';


@NgModule({
  declarations: [
    AppComponent,
    QRCodeContainerComponent,
    FootComponent,
    NgxQRCodeComponent,
    PrivateKeyInputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
