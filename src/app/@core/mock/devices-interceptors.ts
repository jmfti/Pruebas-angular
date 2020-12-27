import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";

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
  },
  {
    serialNumber: '89adn8asnd8asnd',
    macAddress: '0001:0abd:aabc:00fd:behf',
    lastConnected: '2020-12-10 23:30:00',
    connected: true,
    model: 'Zyxel-SMD400',
    firmware: 'FW401',
    interfaces: ['reboot', 'reset', 'ping', 'configureWifi24g', 'configureWifi5g', 'rebootWifi', 'getWifis', 'getVoipConfig', 'setVoipConfig', 'rebootLine'],
    imagen: 'https://www.alternate.es/p/230x230/o/Zyxel_VMG1312_B10D_pasarel_y_controlador_10_100_Mbit_s__Router@@o1sy1g.jpg',
    clientId: 'c23452b3523',
    serviceId: 'c2345b43b5234b',
  },
  {
    serialNumber: '923nd923nd9n',
    macAddress: '0000:0abf:aabc:00fd:behf',
    lastConnected: '2020-12-06 23:30:00',
    connected: true,
    model: 'Zyxel-SMD400',
    firmware: 'FW401',
    interfaces: ['reboot', 'reset', 'ping', 'configureWifi24g', 'configureWifi5g', 'rebootWifi', 'getWifis', 'getVoipConfig', 'setVoipConfig', 'rebootLine'],
    imagen: 'https://www.alternate.es/p/230x230/o/Zyxel_VMG1312_B10D_pasarel_y_controlador_10_100_Mbit_s__Router@@o1sy1g.jpg',
    clientId: 'x543c54',
    serviceId: 'v54234552b',
  },
  {
    serialNumber: '3872hd',
    macAddress: '0000:0abd:aabf:00fd:behf',
    lastConnected: '2020-12-06 23:30:00',
    connected: true,
    model: 'Zyxel-SMD400',
    firmware: 'FW402',
    interfaces: ['reboot', 'reset', 'ping', 'configureWifi24g', 'configureWifi5g', 'rebootWifi', 'getWifis', 'getVoipConfig', 'setVoipConfig', 'rebootLine'],
    imagen: 'https://www.alternate.es/p/230x230/o/Zyxel_VMG1312_B10D_pasarel_y_controlador_10_100_Mbit_s__Router@@o1sy1g.jpg',
    clientId: '23f523f52',
    serviceId: '23f52f',
  },
  {
    serialNumber: '9nd923nd2938nd',
    macAddress: '0000:0bbd:aabc:00fd:behf',
    lastConnected: '2020-12-16 23:30:00',
    connected: true,
    model: 'Zyxel-SMD500',
    firmware: 'FW101',
    interfaces: ['reboot', 'reset', 'ping', 'configureWifi24g', 'configureWifi5g', 'rebootWifi', 'getWifis', 'getVoipConfig', 'setVoipConfig', 'rebootLine'],
    imagen: 'https://www.alternate.es/p/230x230/o/Zyxel_VMG1312_B10D_pasarel_y_controlador_10_100_Mbit_s__Router@@o1sy1g.jpg',
    clientId: 'd2452432',
    serviceId: '242f52',
  },
  {
    serialNumber: '93d9823d892',
    macAddress: '0000:0cbd:aabc:00fd:behf',
    lastConnected: '2020-12-16 23:30:00',
    connected: true,
    model: 'Zyxel-SMD500',
    firmware: 'FW102',
    interfaces: ['reboot', 'reset', 'ping', 'configureWifi24g', 'configureWifi5g', 'rebootWifi', 'getWifis', 'getVoipConfig', 'setVoipConfig', 'rebootLine'],
    imagen: 'https://www.alternate.es/p/230x230/o/Zyxel_VMG1312_B10D_pasarel_y_controlador_10_100_Mbit_s__Router@@o1sy1g.jpg',
    clientId: '235v235',
    serviceId: '5v235',
  },
  {
    serialNumber: '23jd892jd9283jd',
    macAddress: '0000:0a1d:aabc:00fd:behf',
    lastConnected: '2020-12-16 23:30:00',
    connected: true,
    model: 'Zyxel-SMD500',
    firmware: 'SMD101',
    interfaces: ['reboot', 'reset', 'ping', 'rebootLine'],
    imagen: 'https://www.alternate.es/p/230x230/o/Zyxel_VMG1312_B10D_pasarel_y_controlador_10_100_Mbit_s__Router@@o1sy1g.jpg',
    clientId: '235b234b5',
    serviceId: '6b3',
  },
  {
    serialNumber: '923hd3289dh823dh8238h92389h',
    macAddress: '0011:0abd:aabc:00fd:behf',
    lastConnected: '2020-12-16 23:30:00',
    connected: true,
    model: 'Zyxel-SMD500',
    firmware: 'SMD101',
    interfaces: ['reboot', 'reset', 'ping', 'rebootLine'],
    imagen: 'https://www.alternate.es/p/230x230/o/Zyxel_VMG1312_B10D_pasarel_y_controlador_10_100_Mbit_s__Router@@o1sy1g.jpg',
    clientId: '3v63v',
    serviceId: 'v53v5',
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

    if (req.url.search("/devicesList") > -1) {
      console.log("devicesList matchea");
      return this.getDevices(req);
    }
    // if (req.url.search("/devicesSearch") > -1) {
    //   console.log("devicesSearch matchea");
    //   return this.searchDevice(req);
    // }
    if (req.url.search("/getDeviceBySerialNumber") > -1) {
      console.log("getDeviceBySerialNumber matchea");
      return this.getDeviceBySerialNumber(req);
    }
    return next.handle(req);
  }

  private data;

  getDevices(req: HttpRequest<any>): Observable<HttpEvent<any>> {
    return of(
      new HttpResponse(
        {
          status: 200,
          body: this.data
        }
      )
    );
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

    let query = req.body;
    console.log(query);
    // let body = req.serializeBody();
    let newData = this.data.filter((el) => {
      return el.serialNumber.search(query.serialNumber) > -1;
    });

    return of(
      new HttpResponse(
        {
          status: 200,
          body: newData
        }
      )
    );
  }
}
