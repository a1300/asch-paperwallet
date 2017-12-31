import { Component, OnInit, Input } from '@angular/core'
import { AschService } from '../../services/asch.service';

@Component({
    selector: 'qrcodecontainer',
    templateUrl: './qrcodecontainer.component.html',
    styleUrls: ['./qrcodecontainer.component.css']
})
export class QRCodeContainerComponent  {
    
    privateKey: string = '';
    address: string = '';

    constructor(private aschService: AschService) {
    }
 
    getNotificationOnPrivateKeyChanged(newPrivateKeyFromChild): void {
        console.log('Parent got new event');
        this.privateKey = newPrivateKeyFromChild;
        this.address = this.aschService.getAddres(this.privateKey);
    }

}