import { Component, OnInit } from '@angular/core';
import {Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'devices-list',
  templateUrl: './devices-list.component.html',
  styleUrls: ['./devices-list.component.scss']
})
export class DevicesListComponent implements OnInit {

  @Input()
  public cpes: [];
  @Output()
  cpesChanged = new EventEmitter<any>();

  @Output()
  deviceSelected = new EventEmitter<any>();

  loading: boolean;


  constructor() { }

  ngOnInit(): void {
    this.cpes = [];
    this.loading = false;
  }

  setCpes(cpes){
    this.cpes = cpes;
  }

  setLoading(loading: boolean){
    this.loading = loading;
  }


}
