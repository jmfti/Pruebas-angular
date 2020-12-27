import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TroubleshootingRoutingModule } from './troubleshooting-routing.module';
import { TroubleshootingComponent } from './troubleshooting.component';
import { LogsSearchComponent } from './logs-search/logs-search.component';
import { ConnectivityComponent } from './connectivity/connectivity.component';


@NgModule({
  declarations: [TroubleshootingComponent, LogsSearchComponent, ConnectivityComponent],
  imports: [
    CommonModule,
    TroubleshootingRoutingModule
  ]
})
export class TroubleshootingModule { }
