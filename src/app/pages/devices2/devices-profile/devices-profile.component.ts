import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {DevicesWifiComponent} from "../devices-wifi/devices-wifi.component";

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

  @ViewChild(DevicesWifiComponent)
  private devicesWifi;

  constructor() { }

  ngOnInit(): void {

  }

}
