/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QlNoidenComponent } from './ql-noiden.component';

describe('QlNoidenComponent', () => {
  let component: QlNoidenComponent;
  let fixture: ComponentFixture<QlNoidenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QlNoidenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QlNoidenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
