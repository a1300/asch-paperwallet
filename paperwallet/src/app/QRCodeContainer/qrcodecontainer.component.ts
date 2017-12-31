import { Component, OnInit, Input } from '@angular/core'
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
    selector: 'qrcodecontainer',
    templateUrl: './qrcodecontainer.component.html',
    styleUrls: ['./qrcodecontainer.component.css']
})
export class QRCodeContainerComponent  {
    
    privateKey: string = 'Das ist ein Test';
 
    getNotificationOnPrivateKeyChanged(newPrivateKeyFromChild): void {
        console.log('Parent got new event');
        this.privateKey = newPrivateKeyFromChild;
    }

}