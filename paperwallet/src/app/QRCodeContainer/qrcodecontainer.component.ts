import { Component, OnInit, Input } from '@angular/core'
import  { ngQrCode } from 'angular-qrcode';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { qrcode } from 'qrcode';

@Component({
    selector: 'qrcodecontainer',
    templateUrl: './qrcodecontainer.component.html',
    styleUrls: ['./qrcodecontainer.component.css']
})
export class QRCodeContainerComponent implements AfterViewInit  {
    
    privateKey: string = '';

    ngAfterViewInit(): void {
        let canvas  = <HTMLCanvasElement>(document.getElementById('canvas'));
        
        if(canvas === undefined)
            throw('canvas is undefined');

        this.privateKey = 'Das ist ein Test';

        qrcode.toCanvas(canvas, this.privateKey, function(error){
            if(error)
                console.error(error);
            else
                console.log('success');
        });
        
    }
    
    @Input('myDir') id;
    constructor() {
    }
}