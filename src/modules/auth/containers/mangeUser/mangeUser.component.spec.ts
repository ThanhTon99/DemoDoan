/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MangeUserComponent } from './mangeUser.component';

describe('MangeUserComponent', () => {
  let component: MangeUserComponent;
  let fixture: ComponentFixture<MangeUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MangeUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MangeUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
