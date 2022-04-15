/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QlChucvuComponent } from './ql-chucvu.component';

describe('QlChucvuComponent', () => {
  let component: QlChucvuComponent;
  let fixture: ComponentFixture<QlChucvuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QlChucvuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QlChucvuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
