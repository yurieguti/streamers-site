import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStreamerComponent } from './list-streamer.component';

describe('ListStreamerComponent', () => {
  let component: ListStreamerComponent;
  let fixture: ComponentFixture<ListStreamerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListStreamerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListStreamerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
