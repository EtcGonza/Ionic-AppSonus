import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoMenuPage } from './contacto-menu.page';

describe('ContactoMenuPage', () => {
  let component: ContactoMenuPage;
  let fixture: ComponentFixture<ContactoMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactoMenuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
