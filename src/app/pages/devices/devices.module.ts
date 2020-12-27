import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevicesRoutingModule } from './devices-routing.module';

import { DevicesComponent } from './devices.component';
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
} from '@nebular/theme';
import { DevicesSearchComponent } from './devices-search/devices-search.component';

@NgModule({
  declarations: [DevicesComponent, DevicesSearchComponent],
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
  ]
})
export class DevicesModule { }
