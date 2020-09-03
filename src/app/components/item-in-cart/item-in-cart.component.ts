import { Component, OnInit, Input, Inject } from '@angular/core';
import { MusicItem } from 'src/app/models/music-item.model';
import { DOCUMENT } from '@angular/common';
import { RemoveFromCart } from 'src/app/store/action';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-item-in-cart',
  templateUrl: './item-in-cart.component.html',
  styleUrls: ['./item-in-cart.component.css']
})
export class ItemInCartComponent implements OnInit {
  @Input() product: MusicItem;
  inCart: boolean;
  constructor(@Inject(DOCUMENT) private document: Document, private store: Store<{items: []; cart: [];}>) { 
    store.pipe(select('shop')).subscribe(data=>{
    console.log(data);
    this.cart=data['cart']
    this.cartOfSame=data['duplicateitems'];
  })
  }

  cartOfSame=[];
  cart=[];

  ngOnInit(){
  }

  goToUrl(url: string): void {
    console.log(url);
    this.document.location.href = url;
}
removeFromCart(item: MusicItem)
{
  this.store.dispatch(new RemoveFromCart(item));
  this.inCart = false;
}
}
