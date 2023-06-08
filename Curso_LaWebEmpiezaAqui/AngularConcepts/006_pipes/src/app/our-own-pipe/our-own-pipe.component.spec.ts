import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurOwnPipeComponent } from './our-own-pipe.component';

describe('OurOwnPipeComponent', () => {
  let component: OurOwnPipeComponent;
  let fixture: ComponentFixture<OurOwnPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurOwnPipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurOwnPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
