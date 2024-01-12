import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatesBadgeComponent } from './rates-badge.component';

describe('RatesBadgeComponent', () => {
  let component: RatesBadgeComponent;
  let fixture: ComponentFixture<RatesBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RatesBadgeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RatesBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
