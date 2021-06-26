import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterStreamerComponent } from './register-streamer.component';

describe('RegisterStreamerComponent', () => {
  let component: RegisterStreamerComponent;
  let fixture: ComponentFixture<RegisterStreamerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterStreamerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterStreamerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
