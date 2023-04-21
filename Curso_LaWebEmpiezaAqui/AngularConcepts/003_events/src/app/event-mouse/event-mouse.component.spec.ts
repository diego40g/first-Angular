import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventMouseComponent } from './event-mouse.component';

describe('EventMouseComponent', () => {
  let component: EventMouseComponent;
  let fixture: ComponentFixture<EventMouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventMouseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventMouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
