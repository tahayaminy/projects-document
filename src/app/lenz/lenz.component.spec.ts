import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LenzComponent } from './lenz.component';

describe('LenzComponent', () => {
  let component: LenzComponent;
  let fixture: ComponentFixture<LenzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LenzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LenzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
