/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QlNguoidungComponent } from './ql-nguoidung.component';

describe('QlNguoidungComponent', () => {
  let component: QlNguoidungComponent;
  let fixture: ComponentFixture<QlNguoidungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QlNguoidungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QlNguoidungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
