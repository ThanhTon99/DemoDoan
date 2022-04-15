/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QlVbdenComponent } from './ql-vbden.component';

describe('QlVbdenComponent', () => {
  let component: QlVbdenComponent;
  let fixture: ComponentFixture<QlVbdenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QlVbdenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QlVbdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
