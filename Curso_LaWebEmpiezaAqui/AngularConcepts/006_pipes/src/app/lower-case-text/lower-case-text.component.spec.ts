import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowerCaseTextComponent } from './lower-case-text.component';

describe('LowerCaseTextComponent', () => {
  let component: LowerCaseTextComponent;
  let fixture: ComponentFixture<LowerCaseTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LowerCaseTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LowerCaseTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
