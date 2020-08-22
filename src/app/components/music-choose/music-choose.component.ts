import { Component, OnInit } from '@angular/core';
import { MusicItem, MusicItemInCart } from 'src/app/models/music-item.model';
import { Observable, Subject } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { take, switchMap } from 'rxjs/operators';
import { MusicService } from '../../services/music.service';

@Component({
  selector: 'app-music-choose',
  templateUrl: './music-choose.component.html',
  styleUrls: ['./music-choose.component.css']
})
export class MusicChooseComponent implements OnInit {

  public musicItemsToDisplay: Array<MusicItem>;
  public priceOfOrder$: Observable<number>;

  public allMusicGenres$: Observable<Array<string>>;
  public musicItemNamePattern$: Subject<string> = new Subject();
  public specificMusicGenre$: Subject<string> = new Subject();

  constructor(private musicItemService: MusicService)  {}

  ngOnInit(): void
  {
    this.allMusicGenres$ = this.musicItemService.getAllMusicGenres$().pipe(take(1));
    this.musicItemNamePattern$.pipe(
        switchMap((musicItemPattern: string) => this.musicItemService.getMusicItemByPattern$(musicItemPattern)))
        .subscribe((musicItemsToDisplay: Array<MusicItem>) => {
          this.musicItemsToDisplay = musicItemsToDisplay;
          console.log(this.musicItemsToDisplay);
      });

    this.specificMusicGenre$.pipe(
        switchMap((musicGenre: string) => this.musicItemService.getAllMusicItemsFromGenres$(musicGenre)))
        .subscribe((musicItemsToDisplay: Array<MusicItem>) => {
          this.musicItemsToDisplay = musicItemsToDisplay; });
          console.log(this.musicItemsToDisplay);
  }
  searchedMusicItemName(musicName: string): void { this.musicItemNamePattern$.next(musicName); }
  searchedMusicGenreName(musicGenre: string): void { this.specificMusicGenre$.next(musicGenre); }
}
