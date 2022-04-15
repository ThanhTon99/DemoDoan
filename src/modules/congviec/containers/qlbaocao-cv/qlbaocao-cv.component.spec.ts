/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QlbaocaoCvComponent } from './qlbaocao-cv.component';

describe('QlbaocaoCvComponent', () => {
  let component: QlbaocaoCvComponent;
  let fixture: ComponentFixture<QlbaocaoCvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QlbaocaoCvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QlbaocaoCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
