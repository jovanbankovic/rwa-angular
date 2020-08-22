import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { TopRating } from 'src/app/models/top-rating.model';
import { GetItems } from 'src/app/store/action';

@Component({
  selector: 'app-top-rating',
  templateUrl: './top-rating.component.html',
  styleUrls: ['./top-rating.component.css']
})
export class TopRatingComponent implements OnInit {

  constructor(private store: Store<{items: TopRating[]; cart: []; shop:any }>) { 
    store.pipe(select('shop')).subscribe(data=>(this.items = data.items));
    console.log(this.items);
  }

  items: TopRating[] = [];

  ngOnInit(): void {
    this.store.dispatch(new GetItems());
  }

}
