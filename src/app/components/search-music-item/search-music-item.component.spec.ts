import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMusicItemComponent } from './search-music-item.component';

describe('SearchMusicItemComponent', () => {
  let component: SearchMusicItemComponent;
  let fixture: ComponentFixture<SearchMusicItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchMusicItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMusicItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
