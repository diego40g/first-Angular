import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoostrapFormComponent } from './boostrap-form.component';

describe('BoostrapFormComponent', () => {
  let component: BoostrapFormComponent;
  let fixture: ComponentFixture<BoostrapFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoostrapFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoostrapFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
