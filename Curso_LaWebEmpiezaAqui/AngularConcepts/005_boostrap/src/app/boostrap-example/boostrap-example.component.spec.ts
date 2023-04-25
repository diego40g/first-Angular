import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoostrapExampleComponent } from './boostrap-example.component';

describe('BoostrapExampleComponent', () => {
  let component: BoostrapExampleComponent;
  let fixture: ComponentFixture<BoostrapExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoostrapExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoostrapExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
