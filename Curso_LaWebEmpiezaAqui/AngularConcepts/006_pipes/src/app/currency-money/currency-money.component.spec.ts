import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyMoneyComponent } from './currency-money.component';

describe('CurrencyMoneyComponent', () => {
  let component: CurrencyMoneyComponent;
  let fixture: ComponentFixture<CurrencyMoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyMoneyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencyMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
