import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevicesSearchComponent } from './devices-search.component';

describe('DevicesSearchComponent', () => {
  let component: DevicesSearchComponent;
  let fixture: ComponentFixture<DevicesSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevicesSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
