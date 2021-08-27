import { Action } from '@ngrx/store';
import { ShoppingItem } from './shopping-item.model';

export const ADD_ITEM='Add_Item';
export const REMOVE_ITEM='Remove_Item';
export const GET_ITEM='Get_Item';

export class AddItem implements Action{
  readonly type=ADD_ITEM;
  constructor(public payload:ShoppingItem){}
}

export class RemoveItem implements Action{
  readonly type=REMOVE_ITEM;

  constructor(public payload: ShoppingItem) { }
}

  // constructor(public payload:ShoppingItem){}


export type ShoppingActions=AddItem | RemoveItem ;
