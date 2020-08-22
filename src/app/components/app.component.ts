import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { MusicItem } from '../models/music-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Soundable';
  constructor(private store: Store<{items: []; cart: [];}>){
    store.pipe(select('shop')).subscribe(data=> {(this.cart = data['cart'])
      this.cartOfSame=data['duplicateitems'];
      this.sum = 0;
      this.sumOfSame=0;
      this.cart.forEach(el=>this.sum=el.price+this.sum);
      this.cartOfSame.forEach(el=>this.sumOfSame=el.price+this.sumOfSame);
  })

  }
  sum: number; 
  cartOfSame=[];
  sumOfSame:number;
  cart: MusicItem[] = [];
  display = false;
  public modalShow = false;

  onPress()
  {

    this.display = !this.display;
  }

  openModal() { this.modalShow = !this.modalShow; }

  displayModal(): string {
    if (this.modalShow)
    {
      return 'block';
    }
    else
    {
      return 'none';
    }
  }
}
