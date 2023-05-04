import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsBoostrapComponent } from './forms-boostrap.component';

describe('FormsBoostrapComponent', () => {
  let component: FormsBoostrapComponent;
  let fixture: ComponentFixture<FormsBoostrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsBoostrapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsBoostrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
