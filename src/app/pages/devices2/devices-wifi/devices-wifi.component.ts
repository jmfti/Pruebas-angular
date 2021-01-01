import {Component, Inject, Input, OnInit, ViewChild} from '@angular/core';
import {DevicesService} from "../../../@core/utils/devices.service";
import {NbGlobalPhysicalPosition, NbToastrService} from "@nebular/theme";


@Component({
  selector: 'devices-wifi',
  templateUrl: './devices-wifi.component.html',
  styleUrls: ['./devices-wifi.component.scss']
})
export class DevicesWifiComponent implements OnInit {


  @Input()
  public cpe;

  public wifiName: string;
  public encrypt: string;
  public password: string;
  public enableWifi: boolean;

  public setWifi = "setWifi";
  public loading = false;


  constructor(private devicesService: DevicesService, private toasterService: NbToastrService) { }

  ngOnInit(): void {

  }

  hasEditableWifi(): boolean{
    if (this.cpe === null || this.cpe === undefined) {

      return false;
    }

    if (this.cpe.interfaces.indexOf('configureWifi24g') > -1)
      return true;

    return false;
  }

  async send(): Promise<any>{
    this.loading = true;
    let res = await this.devicesService.setWifi({
      wifiName: this.wifiName,
      encryption: this.encrypt,
      password: this.password,
    });
    this.loading = false;
    this.toasterService.show("Operation succeeded", "Success!",{
      status: "success",
    });
    return true;
  }

}
