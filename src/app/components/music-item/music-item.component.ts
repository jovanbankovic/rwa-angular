import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MusicItem } from '../../models/music-item.model';
import { Store } from '@ngrx/store';
import { AddToCart, RemoveFromCart } from "src/app/store/action"
@Component({
  selector: 'app-music-item',
  templateUrl: './music-item.component.html',
  styleUrls: ['./music-item.component.css']
})
export class MusicItemComponent implements OnInit {
  @Input() musicItem: MusicItem[] = [];
  inCart = false;
  public modalShow: boolean;
  constructor(private store: Store<{items: []; cart: []}>) {}
  display = false;

  onPress()
  {
    this.display = !this.display;
  }

  onPressReverse()
  {
    this.display = false;
  }

  ngOnInit(): void {
    this.modalShow = false;
  }
  // tslint:disable-next-line:typedef
  addToCart(item: MusicItem) {
    this.store.dispatch(new AddToCart(item));
    this.inCart = true;
  }

  removeFromCart(item: MusicItem)
  {
    this.store.dispatch(new RemoveFromCart(item));
    this.inCart = false;
  }

  // tslint:disable-next-line:typedef
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
