import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of, from} from 'rxjs';

@Injectable()
export class GenericHttpInterceptor implements HttpInterceptor {


  constructor() {

  }

  met = {
    snr: {
      down: 15,
      up: 17,
    },
    att: {
      down: 5,
      up: 9,
    },
    power: {
      up: 75,
      down: 80,
    }
  };

  interfaces = ["getMetrics"];

  // delay(ms: number): Promise {
  //   return new Promise( resolve => setTimeout(resolve, ms));
  // }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // console.log("prueba interceptor deviceList");

    // if (req.url.search('/devicesList') > -1) {
    //   console.log('devicesList matchea');
    //   return this.getDevices(req);
    // }

    for(let iface of this.interfaces){
      if (req.url.search(iface) > -1){
        let res = this[iface](req);
        return this.wrapResponse(res);
      }
    }

    return next.handle(req);
  }

  getMetrics(req: HttpRequest<any>){
    // console.log("devolviendo metricas");
    this.met.snr.up = 2 * Math.sin(200 * (Date.now() / 1000)) + 15;
    this.met.snr.down = 2 * Math.sin(215 * (Date.now() / 1000)) + 17;
    this.met.att.up = 2 * Math.sin(190 * (Date.now() / 1000)) + 5;
    this.met.att.down = 2 * Math.sin(213 * (Date.now() / 1000)) + 9;
    this.met.power.up = 2 * Math.sin(201 * (Date.now() / 1000)) + 75;
    this.met.power.down = 2 * Math.sin(203 * (Date.now() / 1000)) + 80;


    return this.met;
  }

  wrapResponse(data): Observable<HttpEvent<any>> {
    console.log("devolviendo observable de data : " + JSON.stringify(data));
    return from(
      new Promise<any>( resolve => {
        setTimeout( () => {
          resolve(
            new HttpResponse( {
              status:200,
              body:data,
            })
          );
        }, 200);
      })
    );

    // return from( new Promise(resolve => {
    //   setTimeout( () => {
    //     resolve(
    //       new HttpResponse({
    //         status: 200,
    //         body: data,
    //       })
    //     );
    //   }, 100);
    // }));
    // return of(new HttpResponse({
    //   status: 200,
    //   body: data
    // }));
  }
}
