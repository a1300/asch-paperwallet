

var QRCode = require('qrcode');
var canvas = document.getElementById('canvas');



QRCode.toCanvas(canvas, 'Das ist der Text', function(error){
    if(error)
        console.error(error);
    else
        console.log('success');
})

console.log('geladen');
