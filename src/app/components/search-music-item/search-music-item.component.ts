import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MusicItem } from 'src/app/models/music-item.model';
import { Observable, Subject } from 'rxjs';

import { select, Store } from '@ngrx/store';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { MusicService } from 'src/app/services/music.service';

@Component({
  selector: 'app-search-music-item',
  templateUrl: './search-music-item.component.html',
  styleUrls: ['./search-music-item.component.css']
})
export class SearchMusicItemComponent implements OnInit {

  private nameOfMusicItemToSearch$: Subject<string> = new Subject<string>();
  public musicGenres: string[];
  public selectedMusicGenre: string;

  @Input() allMusicGenres$: Observable<Array<string>>;

  @Output() musicGenreEmitter: EventEmitter<string> = new EventEmitter<string>();
  @Output() musicItemToSearchEmitter: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.allMusicGenres$.subscribe((allMusicGenres: Array<string>) => {
        console.log(allMusicGenres);
        this.musicGenres = [MusicService.ALL_GENRES,
          ...allMusicGenres,
        ];
      }
    );
    this.nameOfMusicItemToSearch$.pipe(debounceTime(350), distinctUntilChanged())
      .subscribe((nameOfMusicItem: string) => {
        this.musicItemToSearchEmitter.emit(nameOfMusicItem);
        console.log(nameOfMusicItem);
      });
  }
  // tslint:disable-next-line:typedef
  searchGivenMusicGenre(musicGenre: string) { this.musicGenreEmitter.emit(musicGenre); }

  // tslint:disable-next-line:typedef
  searchMusicItemByName(musicItemName: string) { this.nameOfMusicItemToSearch$.next(musicItemName); }
}

