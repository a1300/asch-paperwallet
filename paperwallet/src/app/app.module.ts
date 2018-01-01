import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//providers
import { AschService } from '../services/asch.service';

//qr component
import { NgxQRCodeComponent } from './QRCodeContainer/QRCodeDisplay/qrcodedisplay.component';


//components
import { AppComponent } from './app.component';
import { QRCodeContainerComponent } from './QRCodeContainer/qrcodecontainer.component';
import { FootComponent } from './Foot/foot.component';
import { PrivateKeyInputComponent } from './QRCodeContainer/PrivateKeyInput/privatekeyinput.component';
import { TutorialComponent } from './Tutorial/tutorial.component';

//routes
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: QRCodeContainerComponent },
  { path: 'tutorial', component: TutorialComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  declarations: [
    AppComponent,
    QRCodeContainerComponent,
    FootComponent,
    NgxQRCodeComponent,
    PrivateKeyInputComponent,
    TutorialComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ AschService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
