/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QlPhongbanComponent } from './ql-phongban.component';

describe('QlPhongbanComponent', () => {
  let component: QlPhongbanComponent;
  let fixture: ComponentFixture<QlPhongbanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QlPhongbanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QlPhongbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
