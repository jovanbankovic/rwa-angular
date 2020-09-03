import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MusicChooseComponent } from './music-choose/music-choose.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { TopRatingComponent } from './top-rating/top-rating.component';
import { ItemInCartComponent } from './item-in-cart/item-in-cart.component';

const routes: Routes = [
  { path: '' , component: MusicChooseComponent },
  { path: 'myplaylist', component: ItemInCartComponent },
  { path: 'about', component: MyProfileComponent },
  { path: 'topratings', component: TopRatingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
