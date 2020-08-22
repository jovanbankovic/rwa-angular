import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicChooseComponent } from './music-choose.component';

describe('MusicChooseComponent', () => {
  let component: MusicChooseComponent;
  let fixture: ComponentFixture<MusicChooseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicChooseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicChooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
