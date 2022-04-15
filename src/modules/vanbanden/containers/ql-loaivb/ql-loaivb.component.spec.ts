/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QlLoaivbComponent } from './ql-loaivb.component';

describe('QlLoaivbComponent', () => {
  let component: QlLoaivbComponent;
  let fixture: ComponentFixture<QlLoaivbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QlLoaivbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QlLoaivbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
