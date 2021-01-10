import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicesMetricsComponent } from './devices-metrics.component';

describe('DevicesMetricsComponent', () => {
  let component: DevicesMetricsComponent;
  let fixture: ComponentFixture<DevicesMetricsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevicesMetricsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicesMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
