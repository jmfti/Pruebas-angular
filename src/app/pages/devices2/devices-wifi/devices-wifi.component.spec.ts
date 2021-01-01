import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicesWifiComponent } from './devices-wifi.component';

describe('DevicesWifiComponent', () => {
  let component: DevicesWifiComponent;
  let fixture: ComponentFixture<DevicesWifiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevicesWifiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicesWifiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
