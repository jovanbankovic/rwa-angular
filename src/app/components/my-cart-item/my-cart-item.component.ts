import { Component, OnInit, Inject } from '@angular/core';
import { MusicItem } from 'src/app/models/music-item.model';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-my-cart-item',
  templateUrl: './my-cart-item.component.html',
  styleUrls: ['./my-cart-item.component.css']
})
export class MyCartItemComponent implements OnInit {
    state$: Observable<MusicItem[]>;
    items: MusicItem[] = [];

    constructor(public activatedRoute: ActivatedRoute){}
    

    ngOnInit()
    {
    }   

   
}
