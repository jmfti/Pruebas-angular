import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of, from} from 'rxjs';



const DATA = [
  {
    serialNumber: 'adsa8da98sdn',
    macAddress: '0000:0abd:aabc:00fd:behf',
    lastConnected: '2020-12-13 23:30:00',
    connected: true,
    model: 'Zyxel-SMD500',
    firmware: 'FW101',
    interfaces: ['reboot', 'reset', 'ping', 'configureWifi24g', 'configureWifi5g', 'rebootWifi', 'getWifis', 'getVoipConfig', 'setVoipConfig', 'rebootLine'],
    imagen: 'https://www.alternate.es/p/230x230/o/Zyxel_VMG1312_B10D_pasarel_y_controlador_10_100_Mbit_s__Router@@o1sy1g.jpg',
    clientId: 'ºz123ºxº23',
    serviceId: '1x23x3',
    ip: '10.200.15.2',
    tags: ['snmp', 'cwmp', 'ftth'],
  },
  {
    serialNumber: 'nad987asnd',
    macAddress: '0000:0abd:aabc:00fd:behf',
    lastConnected: '2020-12-14 23:30:00',
    connected: true,
    model: 'Zyxel-SMD400',
    firmware: 'FW401',
    interfaces: ['reboot', 'reset', 'ping', 'configureWifi24g', 'configureWifi5g', 'rebootWifi', 'getWifis', 'getVoipConfig', 'setVoipConfig', 'rebootLine'],
    imagen: 'https://www.alternate.es/p/230x230/o/Zyxel_VMG1312_B10D_pasarel_y_controlador_10_100_Mbit_s__Router@@o1sy1g.jpg',
    clientId: '2345c234v523v5',
    serviceId: '2c345234532',
    ip: '10.204.115.62',
    tags: ['snmp', 'cwmp', 'adsl2+'],
  },
  {
    serialNumber: 'd3nmd982mnd',
    macAddress: '0000:0abd:aabc:00fd:behf',
    lastConnected: '2020-12-14 23:30:00',
    connected: true,
    model: 'Zyxel-SMD300',
    firmware: 'FW302',
    interfaces: ['reboot', 'reset', 'ping', 'configureWifi24g', 'configureWifi5g', 'rebootWifi', 'getWifis', 'getVoipConfig', 'setVoipConfig', 'rebootLine'],
    imagen: 'https://www.alternate.es/p/230x230/o/Zyxel_VMG1312_B10D_pasarel_y_controlador_10_100_Mbit_s__Router@@o1sy1g.jpg',
    clientId: '234c5234v5',
    serviceId: '23c4523b4535',
    ip: '10.240.145.24',
    tags: ['snmp', 'vdsl'],
  },
  {
    serialNumber: 'a8dbasbd',
    macAddress: '0000:0abd:aacc:00fd:behf',
    lastConnected: '2020-12-15 23:30:00',
    connected: true,
    model: 'Zyxel-SMD500',
    firmware: 'FW101',
    interfaces: ['reboot', 'reset', 'ping', 'configureWifi24g', 'configureWifi5g', 'rebootWifi', 'getWifis', 'getVoipConfig', 'setVoipConfig', 'rebootLine'],
    imagen: 'https://www.alternate.es/p/230x230/o/Zyxel_VMG1312_B10D_pasarel_y_controlador_10_100_Mbit_s__Router@@o1sy1g.jpg',
    clientId: '2c4523v452',
    serviceId: '23c4523v24',
    ip: '10.200.115.21',
    tags: ['snmp', 'cwmp', 'adsli'],
  },
];

@Injectable()
export class DevicesInterceptors implements HttpInterceptor {


  constructor() {
    this.data = DATA;
  }

  // delay(ms: number): Promise {
  //   return new Promise( resolve => setTimeout(resolve, ms));
  // }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // console.log("prueba interceptor deviceList");

    if (req.url.search('/devicesList') > -1) {
      console.log('devicesList matchea');
      return this.getDevices(req);
    }
    // if (req.url.search("/devicesSearch") > -1) {
    //   console.log("devicesSearch matchea");
    //   return this.searchDevice(req);
    // }
    if (req.url.search('/getDeviceBySerialNumber') > -1) {
      console.log('getDeviceBySerialNumber matchea');
      return this.getDeviceBySerialNumber(req);
    }

    if (req.url.search('/setWifi') > -1){
      return this.setWifi(req);
    }
    return next.handle(req);
  }

  private data;

  getDevices(req: HttpRequest<any>): Observable<HttpEvent<any>> {

    return of(
      new HttpResponse(
        {
          status: 200,
          body: this.data,
        },
      ),
    );
  }

  setWifi(req: HttpRequest<any>): Observable<HttpEvent<any>> {

    return from(new Promise<any>(resolve => {
      setTimeout( () => {
        resolve(
          new HttpResponse({
            status: 200,
            body: {
              result: "ok",
              warnings: [],
              errors: [],
            },
          }),
        );
      }, 3000);
    }));
  }

  // searchDevice(req: HttpRequest<any>): Observable<HttpEvent<any>> {
  //   let query = req.serializeBody();
  //   console.log(req);
  //   // let body = req.serializeBody();
  //   return this.data.filter((el) => {
  //     return el.serialNumber.search(query.serialNumber) > -1 ||
  //       el.macAddress.search(query.macAddress) > -1 ||
  //       el.serialNumber.search(query.serviceId) > -1;
  //   });
  //
  //   return of(
  //     new HttpResponse(
  //       {
  //         status: 200,
  //         body: (([]) as any).default
  //       }
  //     )
  //   );
  // }



  getDeviceBySerialNumber(req: HttpRequest<any>): Observable<HttpEvent<any>> {

    const query = req.body;
    console.log(query);
    // let body = req.serializeBody();
    const newData = this.data.filter((el) => {
      return el.serialNumber.search(query.serialNumber) > -1;
    });

    return from(new Promise<any>(resolve => {
      setTimeout( () => {
        resolve(
          new HttpResponse({
            status: 200,
            body: newData,
          }),
        );
      }, 500);
    }));

    // return of(
    //   new HttpResponse(
    //     {
    //       status: 200,
    //       body: newData
    //     }
    //   )
    // );
  }
}
