import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//qr
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';


//components
import { AppComponent } from './app.component';
import { QRCodeContainerComponent } from './QRCodeContainer/qrcodecontainer.component';
import { FootComponent } from './Foot/foot.component';

@NgModule({
  declarations: [
    AppComponent,
    QRCodeContainerComponent,
    FootComponent
  ],
  imports: [
    BrowserModule,
    NgxQRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
