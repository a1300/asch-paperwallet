import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'qrcode',
    templateUrl: './qrcode.component.html',
    styleUrls: ['./qrcode.component.css']
})
export class QRCodeComponent implements OnInit {
    test: string = 'hello'
    ngOnInit(): void {
        this.test = 'world';
    }
    constructor() {}

}