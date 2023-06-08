import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyUpKeyDownComponent } from './key-up-key-down.component';

describe('KeyUpKeyDownComponent', () => {
  let component: KeyUpKeyDownComponent;
  let fixture: ComponentFixture<KeyUpKeyDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyUpKeyDownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyUpKeyDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
