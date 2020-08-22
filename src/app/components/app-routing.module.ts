import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyCartItemComponent } from './my-cart-item/my-cart-item.component';
import { MusicChooseComponent } from './music-choose/music-choose.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { TopRatingComponent } from './top-rating/top-rating.component';

const routes: Routes = [
  { path: '' , component: MusicChooseComponent },
  { path: 'myplaylist', component: MyCartItemComponent },
  { path: 'about', component: MyProfileComponent },
  { path: 'topratings', component: TopRatingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
