import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {DevicesService} from "../../../@core/utils/devices.service";


@Component({
  selector: 'devices-metrics',
  templateUrl: './devices-metrics.component.html',
  styleUrls: ['./devices-metrics.component.scss']
})
export class DevicesMetricsComponent implements OnInit {

  loading = false;

  liveUpdateChartData = [];

  metrics : any;

  @Input()
  private cpe;


  constructor(private devicesService: DevicesService) {
  }

  ngOnInit(): void {
    this.metrics = {
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
      },
    };
  }

  async reload(){
    this.loading = true;
    try{
      let newMetrics = await this.devicesService.getMetrics(this.cpe);
      console.log(newMetrics);
      if (newMetrics != undefined && newMetrics != null){
        this.metrics = newMetrics;
      }
    }
    catch(e){
      this.metrics = {
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
        },
      };
      console.log("can't get metrics");
      console.log(e);
    }
    this.loading = false;
  }

}
