import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { MusicChooseComponent } from './components/music-choose/music-choose.component';
import { AppRoutingModule } from './components/app-routing.module';
import { AppComponent } from './components/app.component';
import { SearchMusicItemComponent } from './components/search-music-item/search-music-item.component';
import { MusicItemComponent } from './components/music-item/music-item.component';
import { MyCartItemComponent } from './components/my-cart-item/my-cart-item.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { ShopReducer } from './store/reducer';
import { ItemInCartComponent } from './components/item-in-cart/item-in-cart.component';
import { TopRatingComponent } from './components/top-rating/top-rating.component';
import { ShopEffects } from './store/effect';
import { EffectsModule } from '@ngrx/effects';
import { NgxAudioPlayerModule } from 'ngx-audio-player';

@NgModule({
  declarations: [
    AppComponent,
    MusicChooseComponent,
    SearchMusicItemComponent,
    MusicItemComponent,
    MyCartItemComponent,
    MyProfileComponent,
    ItemInCartComponent,
    TopRatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ shop: ShopReducer }),
    EffectsModule.forRoot([ShopEffects]),
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
    NgxAudioPlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
