import {Component, OnInit} from '@angular/core';
import {DevicesService} from "../../../@core/utils/devices.service";
import {Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'devices-search',
  templateUrl: './devices-search.component.html',
  styleUrls: ['./devices-search.component.scss']
})
export class DevicesSearchComponent implements OnInit {

  public serialNumberQuery: string;
  public mierdaDebug: string;

  @Output() searchDevice = new EventEmitter<string>();

  public mensaje: string;
  public descripcion: string;
  loading: boolean;

  constructor(private devicesService: DevicesService) {
  }

  ngOnInit(): void {
    this.loading = false;
    this.serialNumberQuery = "";
    this.mierdaDebug = "";
  }

  onEnter(): void {
    // hacer mierda
    this.mierdaDebug = this.serialNumberQuery;
    this.searchDevice.emit(this.serialNumberQuery);
    console.log(this.serialNumberQuery);
  }


}
