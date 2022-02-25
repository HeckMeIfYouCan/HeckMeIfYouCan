import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data/data.service';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent implements OnInit {

  mllink = '';
  mlurl = '';
  phn = '';
  owner = '';
  city = '';
  street = '';

  constructor(private data: DataService) {}

  ngOnInit() {
    this.mllink = this.data.mllink;
    this.mlurl = this.data.mlurl;
    this.phn = this.data.phone;
    this.owner = this.data.owner;
    this.city = this.data.city;
    this.street = this.data.street;
  }

}
