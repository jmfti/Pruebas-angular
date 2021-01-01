import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DevicesService {


  constructor(private http: HttpClient) {

  }

  getDevicesList(): Promise<any> {
    // return this.http.get(environment.deviceServiceUri + '/devicesList').toPromise().then((res) => {
    //   console.log(res);
    // });
    console.log(environment.deviceServiceUri + '/devicesList');
    let res = this.http.get(environment.deviceServiceUri + '/devicesList').toPromise();
    return res;

  }

  async getDevicesBySerialNumber(serialNumber: string): Promise<any> {
    let res = this.http.post(environment.deviceServiceUri + '/getDeviceBySerialNumber',
      {
        'serialNumber': serialNumber,
        macAddress: '',
        serviceId: '',
      }).toPromise();
    return res;

  }

  async setWifi(wifi: any){
    let res = this.http.post(environment.deviceServiceUri + '/setWifi',
      { wifi }).toPromise();
    return res;
  }

  async getCpesModels() {
    const newData = await this.getDevicesList();
    const models = new Set();
    newData.forEach((el) => {
      models.add(el.model);
    });
    return models;
  }

  // async getCpeBySerialNumber(serialNumber: string) {
  //
  //   const newData = await this.getDevicesList();
  //
  //   if (serialNumber === '') {
  //     console.log('serialNumber :' + serialNumber);
  //     return [];
  //   }
  //
  //   const devices = newData.filter((element, index, array) => {
  //     return element.serialNumber.search(serialNumber) > -1;
  //   });
  //
  //   console.log('devices => ' + JSON.stringify(devices));
  //
  //   return devices;
  //
  //
  // }
}
