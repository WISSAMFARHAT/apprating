import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingBarStarComponent } from './rating-bar-star.component';

describe('RatingBarStarComponent', () => {
  let component: RatingBarStarComponent;
  let fixture: ComponentFixture<RatingBarStarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingBarStarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingBarStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
