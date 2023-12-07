import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSelectComponent } from './client-select.component';

describe('ClientSelectComponent', () => {
  let component: ClientSelectComponent;
  let fixture: ComponentFixture<ClientSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientSelectComponent]
    });
    fixture = TestBed.createComponent(ClientSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
