import { Component, Output, EventEmitter } from '@angular/core'


@Component({
    selector: 'privatekeyinput',
    templateUrl: './privatekeyinput.component.html',
    styleUrls: ['./privatekeyinput.component.css']
})
export class PrivateKeyInputComponent {
    privateKey: string = 'test';

    @Output() privateKeyChanged = new EventEmitter<string>(); 

    submitPrivateKey(): void {
        console.log(this.privateKey);
        this.privateKeyChanged.emit(this.privateKey);
    }
}
