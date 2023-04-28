import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleCaseTextComponent } from './title-case-text.component';

describe('TitleCaseTextComponent', () => {
  let component: TitleCaseTextComponent;
  let fixture: ComponentFixture<TitleCaseTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleCaseTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleCaseTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
