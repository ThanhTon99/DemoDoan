/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PhancongCvComponent } from './phancong-cv.component';

describe('PhancongCvComponent', () => {
  let component: PhancongCvComponent;
  let fixture: ComponentFixture<PhancongCvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhancongCvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhancongCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
