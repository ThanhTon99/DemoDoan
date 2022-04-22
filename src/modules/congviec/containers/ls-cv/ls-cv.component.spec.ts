/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LsCvComponent } from './ls-cv.component';

describe('LsCvComponent', () => {
  let component: LsCvComponent;
  let fixture: ComponentFixture<LsCvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LsCvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LsCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
