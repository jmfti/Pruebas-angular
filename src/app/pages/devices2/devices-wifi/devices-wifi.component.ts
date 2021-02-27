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

  public validationStatus = "danger";


  constructor(private devicesService: DevicesService, private toasterService: NbToastrService) { }

  ngOnInit(): void {

  }

  validateData(): any {

    if (this.wifiName.length > 5 && ( /[a-z]/.test(this.password) &&
                                      /[A-Z]/.test(this.password) &&
                                      /\d/.test(this.password) &&
                                      /[!'¡+`ç´\-.,]/.test(this.password)
    )){
      this.validationStatus = "success";
      console.log("success");
    }
    else{
      console.log("error");
      this.validationStatus = "danger";
    }
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
    if (this.validationStatus == "danger"){
      this.toasterService.danger("Please, enter a valid password (at least 6 characters having at least 1 A-Z, 1 a-z, 1 of (?¿,.-ç´`+) and 1 of 0-9");
      return false;
    }
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
