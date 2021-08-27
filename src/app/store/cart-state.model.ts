import { ShoppingItem } from "./shopping-item.model";
export interface CartState {
  readonly products: ShoppingItem[];
}
