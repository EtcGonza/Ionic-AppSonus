import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMicrofonosPage } from './lista-microfonos.page';

describe('ListaMicrofonosPage', () => {
  let component: ListaMicrofonosPage;
  let fixture: ComponentFixture<ListaMicrofonosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaMicrofonosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaMicrofonosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
