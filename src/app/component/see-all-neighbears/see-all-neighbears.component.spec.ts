import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeAllNeighbearsComponent } from './see-all-neighbears.component';

describe('SeeAllNeighbearsComponent', () => {
  let component: SeeAllNeighbearsComponent;
  let fixture: ComponentFixture<SeeAllNeighbearsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SeeAllNeighbearsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeAllNeighbearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
