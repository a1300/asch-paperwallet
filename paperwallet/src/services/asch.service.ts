import { Injectable } from '@angular/core';
import { crypto } from 'asch-js';

@Injectable()
export class AschService {
  getAddres(privateKey: string): string {
    let ppu = crypto.getKeys(privateKey).publicKey;
    let address = crypto.getAddress(ppu);
    return address;    
  }
}