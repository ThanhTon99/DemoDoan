/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QlCvComponent } from './ql-cv.component';

describe('QlCvComponent', () => {
  let component: QlCvComponent;
  let fixture: ComponentFixture<QlCvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QlCvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QlCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
