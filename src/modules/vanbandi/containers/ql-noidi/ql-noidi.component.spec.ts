/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QlNoidiComponent } from './ql-noidi.component';

describe('QlNoidiComponent', () => {
  let component: QlNoidiComponent;
  let fixture: ComponentFixture<QlNoidiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QlNoidiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QlNoidiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
