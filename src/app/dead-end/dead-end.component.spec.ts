import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeadEndComponent } from './dead-end.component';

describe('DeadEndComponent', () => {
  let component: DeadEndComponent;
  let fixture: ComponentFixture<DeadEndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeadEndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeadEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
