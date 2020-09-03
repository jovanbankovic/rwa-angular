import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, concat } from 'rxjs';
import { MusicItem } from '../models/music-item.model';
import { MusicGenre } from '../models/music-genre.model';

import { catchError, concatAll, map, switchMap, tap, filter } from 'rxjs/operators';
import { TopRating } from '../models/top-rating.model';

@Injectable({
  providedIn: 'root',
})
export class MusicService {
  private dbURL = 'api';
  private musicItemsUrl = `${this.dbURL}/musicItems`;
  private musicGenresUrl = `${this.dbURL}/musicGenres`;
  private topRatingUrl = `${this.dbURL}/topRating`;

  // tslint:disable-next-line:member-ordering
  public static ALL_GENRES = 'All';

  constructor(private http: HttpClient) {}

  getAllMusicItemsFromGenres$(musicGenres: string): Observable<Array<MusicItem>> {
    if (musicGenres === MusicService.ALL_GENRES) { return this.getAllMusicItems$(); }
    return this.http.get<Array<MusicGenre>>(
        `${this.musicGenresUrl}/?name=${musicGenres}`
      )
      .pipe(
        concatAll(),
        switchMap((producer: MusicGenre) =>
          this.http.get<Array<MusicItem>>(
            `${this.musicItemsUrl}/?madeBy=${producer.id}`
          )
        )
      );
  }

  getAllTopRatings()
  {
    return this.http.get<Array<TopRating>>(this.topRatingUrl);
  }

  getAllMusicItems$(): Observable<Array<MusicItem>> {
    return this.http
      .get<Array<MusicItem>>(this.musicItemsUrl);
  }

  getMusicItemByPattern$(pattern: string): Observable<Array<MusicItem>> {
    if (!pattern.trim()) { return of(new Array<MusicItem>()); }
    return this.http
      .get<Array<MusicItem>>(`${this.musicItemsUrl}/?name=${pattern}`);
  }

  getAllMusicGenres$(): Observable<Array<string>> {
    return this.http
      .get<Array<MusicGenre>>(this.musicGenresUrl)
      .pipe(
        map((musicGenres: Array<MusicGenre>) => {
          const allMusicGenresNames: Array<string> = musicGenres.map(
            (musicGenre: MusicGenre) => musicGenre.name
          );
          console.log(allMusicGenresNames);
          return allMusicGenresNames;
        }
      ));
  }
}
