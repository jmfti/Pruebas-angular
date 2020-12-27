import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { DevicesModule } from "./devices/devices.module";
import { DevicesModule as DevicesModule2 } from "./devices2/devices.module";
// import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    // FormsModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
