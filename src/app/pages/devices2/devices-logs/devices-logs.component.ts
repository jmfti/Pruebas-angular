import {Component, Input, OnInit} from '@angular/core';
import {DevicesService} from "../../../@core/utils/devices.service";

@Component({
  selector: 'devices-logs',
  templateUrl: './devices-logs.component.html',
  styleUrls: ['./devices-logs.component.scss']
})
export class DevicesLogsComponent implements OnInit {
  searchInput: any;

  data: any;

  output: any;

  @Input()
  private cpe;

  constructor(private devicesService: DevicesService) { }

  ngOnInit(): void {
  }

  async search(): Promise<any> {
    this.data = await this.devicesService.getLogs(this.cpe);
    let re = new RegExp(this.searchInput);
    this.output = JSON.stringify(this.data.matchAll(re));
  }
}
