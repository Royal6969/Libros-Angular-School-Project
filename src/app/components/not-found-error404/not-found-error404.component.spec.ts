import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundError404Component } from './not-found-error404.component';

describe('NotFoundError404Component', () => {
  let component: NotFoundError404Component;
  let fixture: ComponentFixture<NotFoundError404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotFoundError404Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundError404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
