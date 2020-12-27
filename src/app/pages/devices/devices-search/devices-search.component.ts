import { Component, OnInit } from '@angular/core';
import { DevicesService } from "../../../@core/utils/devices.service";
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'devices-search',
  templateUrl: './devices-search.component.html',
  styleUrls: ['./devices-search.component.scss']
})
export class DevicesSearchComponent implements OnInit {

	public serialNumberQuery: string;
	public mierdaDebug: string;
	
	
	@Input() loading: boolean | false;
	@Output() loadingChange = new EventEmitter<boolean>();
	
	
	@Output() searchDevice = new EventEmitter<string>();
	
	public mensaje: string;
	public descripcion: string;
	

  constructor(private devicesService: DevicesService) { }

  ngOnInit(): void {
	  
	  this.serialNumberQuery = "";
	  this.mierdaDebug = "";
  }
  
  onEnter(): void {
	  // hacer mierda 
	  this.mierdaDebug = this.serialNumberQuery;
	  this.searchDevice.emit(this.serialNumberQuery);
  }
  
	
}
