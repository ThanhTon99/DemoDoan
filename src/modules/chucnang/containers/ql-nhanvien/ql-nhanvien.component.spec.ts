/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QlNhanvienComponent } from './ql-nhanvien.component';

describe('QlNhanvienComponent', () => {
  let component: QlNhanvienComponent;
  let fixture: ComponentFixture<QlNhanvienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QlNhanvienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QlNhanvienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
