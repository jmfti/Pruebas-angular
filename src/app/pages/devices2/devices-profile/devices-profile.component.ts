import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'devices-profile',
  templateUrl: './devices-profile.component.html',
  styleUrls: ['./devices-profile.component.scss']
})
export class DevicesProfileComponent implements OnInit {

  debug = "";

  @Input()
  cpe: any;
  @Output()
  cpeChanged = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    // this.cpe = this.nullCpe;
  }

}
