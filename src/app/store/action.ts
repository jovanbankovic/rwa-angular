import { Injectable } from "@angular/core"
import { Action } from "@ngrx/store"
import { MusicItem } from '../models/music-item.model';
import { TopRating } from '../models/top-rating.model';

export enum ActionTypes
{
    Add = "[Product] Add to cart",
    Remove = "[Product] Remove from cart",
    LoadItems = "[Product] Load items from server",
    LoadSuccess = "[Products] Load success"
}

export class AddToCart implements Action{
    readonly type = ActionTypes.Add;
    constructor(public payload: MusicItem){}
}

export class RemoveFromCart implements Action{
    readonly type = ActionTypes.Remove;
    constructor (public payload: MusicItem){}
}

export class GetItems implements Action
{
    readonly type = ActionTypes.LoadItems;
}

export class LoadItems implements Action{
    readonly type = ActionTypes.LoadSuccess;
    constructor(public payload: TopRating[]){}
}

export type ActionsUnion = AddToCart | RemoveFromCart | LoadItems | GetItems;

