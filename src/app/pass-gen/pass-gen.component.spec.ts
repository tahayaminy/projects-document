import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassGenComponent } from './pass-gen.component';

describe('PassGenComponent', () => {
  let component: PassGenComponent;
  let fixture: ComponentFixture<PassGenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassGenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassGenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
