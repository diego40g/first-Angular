import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentValueComponent } from './percent-value.component';

describe('PercentValueComponent', () => {
  let component: PercentValueComponent;
  let fixture: ComponentFixture<PercentValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PercentValueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PercentValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
