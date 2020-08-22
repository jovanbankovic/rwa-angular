import { TestBed } from '@angular/core/testing';

import { MusicService } from './music.service';

describe('MusicItemsService', () => {
  let service: MusicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
