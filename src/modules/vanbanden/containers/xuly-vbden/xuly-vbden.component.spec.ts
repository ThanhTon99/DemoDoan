/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { XulyVbdenComponent } from './xuly-vbden.component';

describe('XulyVbdenComponent', () => {
  let component: XulyVbdenComponent;
  let fixture: ComponentFixture<XulyVbdenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XulyVbdenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XulyVbdenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
