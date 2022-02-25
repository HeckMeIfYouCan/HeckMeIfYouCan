import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data/data.service';

@Component({
  selector: 'app-thesis',
  templateUrl: './thesis.component.html',
  styleUrls: ['./thesis.component.scss']
})
export class ThesisComponent implements OnInit {

  sectCounter = 0;
  subCounter = 0;
  mllink = '';
  mlurl = '';

  constructor(private data: DataService) {}

  ngOnInit() {
    this.mllink = this.data.mllink;
    this.mlurl = this.data.mlurl;
  }

  reset() {
    this.sectCounter = 0;
    return this.count();
  }

  count() {
    this.sectCounter++;
    this.subCounter = 0;
    return this.sectCounter + '.';
  }

  subcount() {
    this.subCounter++;
    return this.sectCounter + '.' + this.subCounter;
  }


}
