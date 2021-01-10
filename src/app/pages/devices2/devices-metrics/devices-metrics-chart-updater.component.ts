import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-devices-metrics-chart-updater',
  template: `
    <div class="row">
      <div class="col-md-12">
        <nb-select style="float:left" multiple placeholder="Metrics" [(ngModel)]="selectedItems" (selectedChange)="selectedChanged($event)">
          <nb-option value="SNR UP">SNR UP</nb-option>
          <nb-option value="SNR DW">SNR DW</nb-option>
          <nb-option value="ATT UP">ATT UP</nb-option>
          <nb-option value="ATT DW">ATT DW</nb-option>
          <nb-option value="PWR UP">PWR UP</nb-option>
          <nb-option value="PWR DW">PWR DW</nb-option>
        </nb-select>
        <nb-toggle style="float:right" status="primary" [(checked)]="enableMonitoring" (change)="this.updateInterval()">{{ enableMonitoring ? 'update' : 'not update'}}</nb-toggle>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <input type="range" min="100" max="10000" step="1" [(ngModel)]="intervalInput" (mouseup)="intervalChange($event)"> {{ intervalInput }}
      </div>
    </div>
<!--    <input nbInput status="info" placeholder="100-10000" [(ngModel)]="intervalInput" (keyup)="intervalChange($event)">-->
<!--    <mv-slider [(value)]="value" [min]="1" [max]="100" [enabled]="enabled" (change)="change()"></mv-slider>-->



    <ngx-charts-line-chart
      [scheme]="colorScheme"
      [results]="multi"
      [xAxis]="showXAxis"
      [yAxis]="showYAxis"
      [legend]="showLegend"
      [showXAxisLabel]="showXAxisLabel"
      [showYAxisLabel]="showYAxisLabel"
      [xAxisLabel]="xAxisLabel"
      [yAxisLabel]="yAxisLabel"
      animations="false"
    legendPosition="below">
    </ngx-charts-line-chart>

  `,
})
export class DevicesMetricsChartUpdaterComponent implements OnDestroy {
  selectedItems = [];
  interval = 1000;
  multi = [
  ];
  allData = {
    "SNR UP": {
      name: 'SNR UP',
      series: [
        {
          name: Date.now(),
          value: 25,
        },
      ],
    },
    "SNR DW": {
      name: 'SNR DW',
      series: [
        {
          name: Date.now(),
          value: 15,
        },
      ],
    },
    "ATT UP": {
      name: 'ATT UP',
      series: [
        {
          name: Date.now(),
          value: 4,
        },
      ],
    },
    "ATT DW": {
      name: 'ATT DW',
      series: [
        {
          name: Date.now(),
          value: 6,
        },
      ],
    },
    "PWR UP": {
      name: 'PWR UP',
      series: [
        {
          name: Date.now(),
          value: 75,
        },
      ],
    },
    "PWR DW": {
      name: 'PWR DW',
      series: [
        {
          name: Date.now(),
          value: 77,
        },
      ],
    },

  };
  showLegend = true;
  showXAxis = true;
  showYAxis = true;
  showXAxisLabel = true;
  xAxisLabel = 'Time';
  showYAxisLabel = true;
  yAxisLabel = 'VALUE';
  colorScheme: any;
  themeSubscription: any;
  enableMonitoring = false;

  timerId: any;
  intervalInput = 1000;

  constructor(private theme: NbThemeService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors: any = config.variables;
      this.colorScheme = {
        domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight],
      };
    });


  }

  updateData(): void {
    if (!this.enableMonitoring){
      return;
    }
    // this.met.snr.up = 2 * Math.sin(200 * (Date.now() / 1000)) + 15;
    // this.met.snr.down = 2 * Math.sin(215 * (Date.now() / 1000)) + 17;
    // this.met.att.up = 2 * Math.sin(190 * (Date.now() / 1000)) + 5;
    // this.met.att.down = 2 * Math.sin(213 * (Date.now() / 1000)) + 9;
    // this.met.power.up = 2 * Math.sin(201 * (Date.now() / 1000)) + 75;
    // this.met.power.down = 2 * Math.sin(203 * (Date.now() / 1000)) + 80;

    this.allData["SNR UP"].series = [...this.allData["SNR UP"].series, { name: Date.now(), value: 2 * Math.sin(200 * (Date.now() / 1000)) + 15}].slice(-100);
    this.allData["SNR DW"].series = [...this.allData["SNR DW"].series, { name: Date.now(), value: 2 * Math.sin(215 * (Date.now() / 1000)) + 17}].slice(-100);
    this.allData["ATT UP"].series = [...this.allData["ATT UP"].series, { name: Date.now(), value: 2 * Math.sin(190 * (Date.now() / 1000)) + 5}].slice(-100);
    this.allData["ATT DW"].series = [...this.allData["ATT DW"].series, { name: Date.now(), value: 2 * Math.sin(213 * (Date.now() / 1000)) + 9}].slice(-100);
    this.allData["PWR UP"].series = [...this.allData["PWR UP"].series, { name: Date.now(), value: 2 * Math.sin(201 * (Date.now() / 1000)) + 75}].slice(-100);
    this.allData["PWR DW"].series = [...this.allData["PWR DW"].series, { name: Date.now(), value: 2 * Math.sin(203 * (Date.now() / 1000)) + 80}].slice(-100);

    // this.selectedChanged(this.selectedItems);
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }

  selectedChanged(event){
    this.multi = [];
    for(let item of event){
      // console.log(this.allData[item]);
      this.multi = [...this.multi, this.allData[item]];
    }
  }

  intervalChange(event){
    console.log(event);
    if (100 <= this.intervalInput && this.intervalInput <= 10000) {
      this.interval = this.intervalInput;
      this.updateInterval();
    }
  }

  updateInterval(): void{
    clearInterval(this.timerId);
    this.timerId = setInterval(() => {
      if (!this.enableMonitoring)
        return;
      // this.met.snr.up = 2 * Math.sin(200 * (Date.now() / 1000)) + 15;
      // this.met.snr.down = 2 * Math.sin(215 * (Date.now() / 1000)) + 17;
      // this.met.att.up = 2 * Math.sin(190 * (Date.now() / 1000)) + 5;
      // this.met.att.down = 2 * Math.sin(213 * (Date.now() / 1000)) + 9;
      // this.met.power.up = 2 * Math.sin(201 * (Date.now() / 1000)) + 75;
      // this.met.power.down = 2 * Math.sin(203 * (Date.now() / 1000)) + 80;

      this.allData["SNR UP"].series = [...this.allData["SNR UP"].series, { name: Date.now(), value: 2 * Math.sin(200 * (Date.now() / 1000)) + 15}].slice(-100);
      this.allData["SNR DW"].series = [...this.allData["SNR DW"].series, { name: Date.now(), value: 2 * Math.sin(215 * (Date.now() / 1000)) + 17}].slice(-100);
      this.allData["ATT UP"].series = [...this.allData["ATT UP"].series, { name: Date.now(), value: 2 * Math.sin(190 * (Date.now() / 1000)) + 5}].slice(-100);
      this.allData["ATT DW"].series = [...this.allData["ATT DW"].series, { name: Date.now(), value: 2 * Math.sin(213 * (Date.now() / 1000)) + 9}].slice(-100);
      this.allData["PWR UP"].series = [...this.allData["PWR UP"].series, { name: Date.now(), value: 2 * Math.sin(201 * (Date.now() / 1000)) + 75}].slice(-100);
      this.allData["PWR DW"].series = [...this.allData["PWR DW"].series, { name: Date.now(), value: 2 * Math.sin(203 * (Date.now() / 1000)) + 80}].slice(-100);

      // console.log(this.allData["SNR UP"]);
      this.selectedChanged(this.selectedItems);
    }, this.interval);

  }
}
