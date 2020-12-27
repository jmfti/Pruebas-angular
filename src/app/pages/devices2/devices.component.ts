import {Component, OnInit} from '@angular/core';
import {DevicesService} from '../../@core/utils/devices.service';
import {Input, Output, EventEmitter} from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import {DevicesSearchComponent} from './devices-search/devices-search.component';
import { DevicesListComponent } from "./devices-list/devices-list.component";

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss'],
})
export class DevicesComponent implements OnInit {

  @ViewChild(DevicesSearchComponent)
  private devicesSearchComponent: DevicesSearchComponent;

  @ViewChild(DevicesListComponent)
  private devicesListComponent: DevicesListComponent;

  devicesRes = [];

  loading = false;

  constructor(private devicesService: DevicesService) {
  }

  ngOnInit(): void {

  }

  // async searchDevice(serialNumber): Promise<boolean> {
  //   this.setLoading(true);
  //   const res = await this.devicesService.getDevicesBySerialNumber(serialNumber);
  //   this.setLoading(false);
  //   console.log(JSON.stringify(res));
  //   this.devicesRes = res;
  //   return true;
  // }

  async searchDevice(serialNumber): Promise<boolean> {
    this.setLoading(true);
    const res = await this.devicesService.getDevicesBySerialNumber(serialNumber);
    console.log(res);
    this.setLoading(false);
    // console.log(JSON.stringify(res));
    this.devicesRes = res;
    return true;
  }

  setLoading(loading: boolean): void {
    this.loading = loading;
    this.devicesSearchComponent.loading = loading;
    this.devicesListComponent.loading = loading;
  }

  deviceSelected(cpe){
    console.log(JSON.stringify(cpe));
  }
}
