import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevicesComponent } from "./devices.component";


const routes: Routes = [
	{
		path: '',
		component: DevicesComponent,
		children: [
			/*{
				path: 'devices-list',
				component: DevicesListComponent
			}*/
		]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevicesRoutingModule { }
