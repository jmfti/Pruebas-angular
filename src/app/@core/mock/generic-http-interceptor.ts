import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of, from} from 'rxjs';

@Injectable()
export class GenericHttpInterceptor implements HttpInterceptor {


  constructor() {

  }

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
    return {
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
  }

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

  wrapResponse(data): Observable<HttpEvent<any>> {
    return of(new HttpResponse({
      status: 200,
      body: data
    }));
  }
}
