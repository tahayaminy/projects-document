import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mp3playerComponent } from './mp3player.component';

describe('Mp3playerComponent', () => {
  let component: Mp3playerComponent;
  let fixture: ComponentFixture<Mp3playerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mp3playerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mp3playerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
