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
  NbListModule,
} from '@nebular/theme';
import { DevicesListComponent } from './devices-list/devices-list.component';
import { DevicesProfileComponent } from './devices-profile/devices-profile.component';


@NgModule({
  declarations: [DevicesComponent, DevicesSearchComponent, DevicesListComponent, DevicesProfileComponent],
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
  ],
})
export class DevicesModule {
}
