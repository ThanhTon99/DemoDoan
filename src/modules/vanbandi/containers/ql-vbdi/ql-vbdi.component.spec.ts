/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QlVbdiComponent } from './ql-vbdi.component';

describe('QlVbdiComponent', () => {
  let component: QlVbdiComponent;
  let fixture: ComponentFixture<QlVbdiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QlVbdiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QlVbdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
