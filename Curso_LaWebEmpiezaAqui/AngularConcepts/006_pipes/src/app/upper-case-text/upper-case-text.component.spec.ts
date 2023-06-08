import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperCaseTextComponent } from './upper-case-text.component';

describe('UpperCaseTextComponent', () => {
  let component: UpperCaseTextComponent;
  let fixture: ComponentFixture<UpperCaseTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpperCaseTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpperCaseTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
