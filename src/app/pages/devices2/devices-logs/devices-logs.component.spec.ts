import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicesLogsComponent } from './devices-logs.component';

describe('DevicesLogsComponent', () => {
  let component: DevicesLogsComponent;
  let fixture: ComponentFixture<DevicesLogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevicesLogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicesLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
