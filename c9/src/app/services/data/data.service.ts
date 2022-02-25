import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  owner = 'Matthias Schmidmaier';
  street = 'Karlstr. 120';
  city = '80335 München';
  mlusr = 'matthias.schmidmaier';
  mldom = 'ifi.lmu.de';
  phone = '+49 (89) 26018735';
  mllink = '';
  mlurl = '';

  constructor() {

    // mailbot fighter
    this.mlurl = 'mailto:' + this.mlusr + '@' + this.mldom;
    this.mllink = this.mlusr + '@' + this.mldom;
  }

}
