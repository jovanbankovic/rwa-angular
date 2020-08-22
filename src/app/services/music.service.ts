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

  // tslint:disable-next-line:typedef
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => { return of(result as T); }; }

  getAllMusicItemsFromGenres$(musicGenres: string): Observable<Array<MusicItem>> {
    if (musicGenres === MusicService.ALL_GENRES) { return this.getAllMusicItems$(); }
    return this.http.get<Array<MusicGenre>>(
        `${this.musicGenresUrl}/?name=${musicGenres}`
      )
      .pipe(
        catchError(
          this.handleError<Array<MusicGenre>>(
            'getAllMusicItemsFrom',
            new Array<MusicItem>()
          )
        ),
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
      .get<Array<MusicItem>>(this.musicItemsUrl)
      .pipe(
        catchError(
          this.handleError<Array<MusicItem>>(
            'getAllMusicItems',
            new Array<MusicItem>()
          )
        )
      );
  }

  getMusicItemByPattern$(pattern: string): Observable<Array<MusicItem>> {
    if (!pattern.trim()) { return of(new Array<MusicItem>()); }
    return this.http
      .get<Array<MusicItem>>(`${this.musicItemsUrl}/?name=${pattern}`)
      .pipe(
        catchError(
          this.handleError<Array<MusicItem>>(
            'searchMusicItem',
            new Array<MusicItem>()
          )
        )
      );
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
        }),
        catchError(
          this.handleError<Array<string>>(
            'getMusicGenres',
            new Array<string>()
          )
        )
      );
  }

  getMusicItemInformation$(musicItemId: number): Observable<MusicGenre> {
    return this.http
      .get<Array<MusicGenre>>(
        `${this.musicItemsUrl}/?id=${musicItemId}`
      )
      .pipe(
        concatAll(),
        filter((info: MusicItem) => info.id === musicItemId)
      );
  }
}
