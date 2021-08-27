import { CartState } from './cart-state.model';
import { ShoppingItem } from './shopping-item.model';
import * as ShoppingActions from './shopping.actions';
const initialState: CartState={
  products: []
};

function addToCart(state: CartState, product: ShoppingItem) {
  if (state.products.find(p => p.name === product.name)) {
    const newProducts = state.products.slice();
    const cartProduct = newProducts.find(p => p.name === product.name);
    cartProduct.num = +1;
    return {
      ...state,
      products: newProducts
    };
  }
  return {
    ...state,
    products: [...state.products, product]
  };
}
function removeFromCart(state: CartState, name: string) {
  return {
    ...state,
    products: [...state.products.filter(p => p.name !== name)]
  };
}
export function CartReducer(state:CartState=initialState ,action:ShoppingActions.ShoppingActions)
{
  switch(action.type)
  {
    case ShoppingActions.ADD_ITEM:
      return addToCart(state, action.payload);
    case ShoppingActions.REMOVE_ITEM:
      return removeFromCart(state, action.payload.name);
    default:
      return state;
  }
}
