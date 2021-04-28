import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialChoiceComponent } from './initial-choice.component';

describe('InitialChoiceComponent', () => {
  let component: InitialChoiceComponent;
  let fixture: ComponentFixture<InitialChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitialChoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
