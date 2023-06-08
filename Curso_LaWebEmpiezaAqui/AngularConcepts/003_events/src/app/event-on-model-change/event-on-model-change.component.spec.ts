import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventOnModelChangeComponent } from './event-on-model-change.component';

describe('EventOnModelChangeComponent', () => {
  let component: EventOnModelChangeComponent;
  let fixture: ComponentFixture<EventOnModelChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventOnModelChangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventOnModelChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
