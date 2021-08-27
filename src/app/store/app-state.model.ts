import { CartState } from "./cart-state.model";
import { ShoppingItem } from "./shopping-item.model";
export interface AppState{
  readonly shopping: Array<ShoppingItem>,
  readonly cart:CartState
}
