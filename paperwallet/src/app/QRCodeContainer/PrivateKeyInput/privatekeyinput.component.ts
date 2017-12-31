import { Component } from '@angular/core'


@Component({
    selector: 'privatekeyinput',
    templateUrl: './privatekeyinput.component.html',
    styleUrls: ['./privatekeyinput.component.css']
})
export class PrivateKeyInputComponent {
    privateKey: string = 'test';

    submitPrivateKey(): void {
        console.log(this.privateKey);
    }
}
