import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHotIconComponent } from './view-hot-icon.component';

describe('ViewHotIconComponent', () => {
  let component: ViewHotIconComponent;
  let fixture: ComponentFixture<ViewHotIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewHotIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHotIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
