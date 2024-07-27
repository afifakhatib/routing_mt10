import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsdashboardComponent } from './productsdashboard.component';

describe('ProductsdashboardComponent', () => {
  let component: ProductsdashboardComponent;
  let fixture: ComponentFixture<ProductsdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
