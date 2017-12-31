import { Component, Output, EventEmitter } from '@angular/core'
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
    selector: 'privatekeyinput',
    templateUrl: './privatekeyinput.component.html',
    styleUrls: ['./privatekeyinput.component.css']
})
export class PrivateKeyInputComponent implements OnInit {
    
    privateKey: string = '';
    @Output() privateKeyChanged = new EventEmitter<string>(); 

    ngOnInit(): void {
        this.privateKey = 'your private key';
    }

    submitPrivateKey(): void {
        console.log('submitted new private key.');
        this.privateKeyChanged.emit(this.privateKey);
    }
}
