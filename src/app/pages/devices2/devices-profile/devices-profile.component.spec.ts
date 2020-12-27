import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicesProfileComponent } from './devices-profile.component';

describe('DevicesProfileComponent', () => {
  let component: DevicesProfileComponent;
  let fixture: ComponentFixture<DevicesProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevicesProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicesProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
