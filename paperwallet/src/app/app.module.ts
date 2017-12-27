import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//components
import { AppComponent } from './app.component';
import { QRCodeComponent } from './QRCode/qrcode.component';
import { FooterComponent } from './Footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    QRCodeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
