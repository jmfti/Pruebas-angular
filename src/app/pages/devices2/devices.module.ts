import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule } from "@angular/forms";

import {DevicesRoutingModule} from './devices-routing.module';

import {DevicesComponent} from './devices.component';
import {DevicesSearchComponent} from './devices-search/devices-search.component';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
  NbSpinnerModule,
  NbListModule, NbStepperModule, NbLayoutModule, NbTabsetModule, NbToggleModule, NbPopoverModule,
} from '@nebular/theme';
import { DevicesListComponent } from './devices-list/devices-list.component';
import { DevicesProfileComponent } from './devices-profile/devices-profile.component';
import { DevicesWifiComponent } from './devices-wifi/devices-wifi.component';
import {DevicesMetricsComponent} from "./devices-metrics/devices-metrics.component";
import {DevicesMetricsChartUpdaterComponent} from "./devices-metrics/devices-metrics-chart-updater.component";


import { NgxChartsModule } from '@swimlane/ngx-charts';
import {NgxBootstrapSliderModule} from "ngx-bootstrap-slider";


@NgModule({
  declarations: [DevicesComponent, DevicesSearchComponent, DevicesListComponent, DevicesProfileComponent, DevicesWifiComponent, DevicesMetricsComponent, DevicesMetricsChartUpdaterComponent],
  imports: [
    CommonModule,
    DevicesRoutingModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    NbSelectModule,
    NbIconModule,
    NbSpinnerModule,
    NbListModule,
    FormsModule,
    NbStepperModule,
    NbLayoutModule,
    NbTabsetModule,
    NbToggleModule,
    NbPopoverModule,
    NgxChartsModule,
    NgxBootstrapSliderModule,
  ],
})
export class DevicesModule {
}
