import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NosotrosSlidesPage } from './nosotros-slides.page';

describe('NosotrosSlidesPage', () => {
  let component: NosotrosSlidesPage;
  let fixture: ComponentFixture<NosotrosSlidesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NosotrosSlidesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NosotrosSlidesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
