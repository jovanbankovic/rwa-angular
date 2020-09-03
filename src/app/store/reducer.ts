import { ActionsUnion, ActionTypes } from './action';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { MusicItem } from '../models/music-item.model';

export const initialState = { items: [], cart: [], duplicateitems: [] };

const existItem = (albums,album)=>{
    return albums.cart.find(((e)=>e.id==album.id));
}

export function ShopReducer(state = initialState, action: ActionsUnion)
{
    switch(action.type)
    {
        case ActionTypes.LoadSuccess:
            return { ...state, items: [...action.payload ]};
        case ActionTypes.Add:
            if(existItem(state, action.payload))
            {
                console.log(action.payload);
                return {
                    ...state,
                    duplicateitems: [...state.duplicateitems, action.payload ]
                }
            }
            else
            {
                return { ...state, cart: [...state.cart, action.payload ]};
            }
        case ActionTypes.Remove:
            return { ...state, 
            cart: [...state.cart.filter(item => item.name !== action.payload.name )],
            duplicateitems: [...state.duplicateitems.filter(item=>item.name !== action.payload.name)]
            };
        default:
            return state;
    }
}
