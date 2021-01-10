import { Component, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'ngx-devices-metrics-chart-updater',
  template: `
    <nb-select multiple placeholder="Metrics" [(ngModel)]="selectedItems" (selectedChange)="selectedChanged($event)">
      <nb-option value="SNR UP">SNR UP</nb-option>
      <nb-option value="SNR DW">SNR DW</nb-option>
      <nb-option value="ATT UP">ATT UP</nb-option>
      <nb-option value="ATT DW">ATT DW</nb-option>
      <nb-option value="PWR UP">PWR UP</nb-option>
      <nb-option value="PWR DW">PWR DW</nb-option>
    </nb-select>
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
      animations="true"
    legendPosition="below">
    </ngx-charts-line-chart>
    <nb-toggle status="primary" [(checked)]="enableMonitoring" >{{ enableMonitoring ? 'update' : 'not update'}}</nb-toggle>
  `,
})
export class DevicesMetricsChartUpdaterComponent implements OnDestroy {
  selectedItems = [];
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

  constructor(private theme: NbThemeService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      const colors: any = config.variables;
      this.colorScheme = {
        domain: [colors.primaryLight, colors.infoLight, colors.successLight, colors.warningLight, colors.dangerLight],
      };
    });
    setInterval(() => {
      if (!this.enableMonitoring)
        return;
      // this.met.snr.up = 2 * Math.sin(200 * (Date.now() / 1000)) + 15;
      // this.met.snr.down = 2 * Math.sin(215 * (Date.now() / 1000)) + 17;
      // this.met.att.up = 2 * Math.sin(190 * (Date.now() / 1000)) + 5;
      // this.met.att.down = 2 * Math.sin(213 * (Date.now() / 1000)) + 9;
      // this.met.power.up = 2 * Math.sin(201 * (Date.now() / 1000)) + 75;
      // this.met.power.down = 2 * Math.sin(203 * (Date.now() / 1000)) + 80;

      this.allData["SNR UP"].series = [...this.allData["SNR UP"].series, { name: Date.now(), value: 2 * Math.sin(200 * (Date.now() / 1000)) + 15}];
      this.allData["SNR DW"].series = [...this.allData["SNR DW"].series, { name: Date.now(), value: 2 * Math.sin(215 * (Date.now() / 1000)) + 17}];
      this.allData["ATT UP"].series = [...this.allData["ATT UP"].series, { name: Date.now(), value: 2 * Math.sin(190 * (Date.now() / 1000)) + 5}];
      this.allData["ATT DW"].series = [...this.allData["ATT DW"].series, { name: Date.now(), value: 2 * Math.sin(213 * (Date.now() / 1000)) + 9}];
      this.allData["PWR UP"].series = [...this.allData["PWR UP"].series, { name: Date.now(), value: 2 * Math.sin(201 * (Date.now() / 1000)) + 75}];
      this.allData["PWR DW"].series = [...this.allData["PWR DW"].series, { name: Date.now(), value: 2 * Math.sin(203 * (Date.now() / 1000)) + 80}];

      // console.log(this.allData["SNR UP"]);
      this.selectedChanged(this.selectedItems);
    }, 1000);
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }

  selectedChanged(event){
    // console.log(event);
    this.multi = [];
    for(let item of event){
      // console.log(this.allData[item]);
      this.multi = [...this.multi, this.allData[item]];
    }
    // console.log(this.multi);
  }
}
