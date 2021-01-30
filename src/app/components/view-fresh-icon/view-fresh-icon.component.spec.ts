import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFreshIconComponent } from './view-fresh-icon.component';

describe('ViewFreshIconComponent', () => {
  let component: ViewFreshIconComponent;
  let fixture: ComponentFixture<ViewFreshIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFreshIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFreshIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
