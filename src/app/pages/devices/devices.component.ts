import { Component, OnInit } from '@angular/core';
import { DevicesService } from "../../@core/utils/devices.service";
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {

	loading: boolean;
	loadingChange = new EventEmitter<boolean>();

  constructor(private devicesService: DevicesService) { }

  ngOnInit(): void {
	  this.loading = false;

  }

  async searchDevice(serialNumber): Promise<boolean> {
	  this.setLoading(true);
	  let res = await this.devicesService.getDevicesBySerialNumber(serialNumber);
	  this.setLoading(false);
	  console.log("oasdnoansdansdn");
	  return true;
  }

  setLoading(loading: boolean): void {
	  this.loading = loading;
	  this.loadingChange.emit(loading);
  }
}
