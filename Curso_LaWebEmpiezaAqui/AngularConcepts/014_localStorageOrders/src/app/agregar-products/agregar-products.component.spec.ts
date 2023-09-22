import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarProductsComponent } from './agregar-products.component';

describe('AgregarProductsComponent', () => {
  let component: AgregarProductsComponent;
  let fixture: ComponentFixture<AgregarProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarProductsComponent]
    });
    fixture = TestBed.createComponent(AgregarProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
