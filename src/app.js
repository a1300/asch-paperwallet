"use strict";

var QRCode = require('qrcode');
var canvas = document.getElementById('canvas');


function showQRCode(qrText) {

    if(qrText === undefined)
        qrText = '';

    QRCode.toCanvas(canvas, qrText, function(error){
        if(error)
            console.error(error);
        else
            console.log('success');
    });

}


window.onload = function () {
    
    document.getElementById('btnSubmit').onclick = function() {
        console.log('clicked');
        let val = document.getElementById('myText')
        showQRCode(val.value);
    };
};

