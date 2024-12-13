import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseNavbarComponent } from './purchase-navbar.component';

describe('PurchaseNavbarComponent', () => {
  let component: PurchaseNavbarComponent;
  let fixture: ComponentFixture<PurchaseNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PurchaseNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
