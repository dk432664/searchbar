import { ShoppingItem } from './shopping-item.model';
import * as ShoppingActions from './shopping.actions';
const initialState: Array<ShoppingItem> = [];

function addToCart(state: Array<ShoppingItem>, product: ShoppingItem) {
    if (state.find(p => p.name === product.name)) {
        const newProducts = state.slice();
        const cartProduct = newProducts.find(p => p.name === product.name);
        cartProduct.num = +1;
        return {
            ...state,
            products: newProducts
        };
    }
    return [
        ...state,
        product
    ];
}
function removeFromCart(state: Array<ShoppingItem>, name: string) {
    return [
        ...state.filter(p => p.name !== name)
    ];
}
export function CartReducer(state: Array<ShoppingItem> = initialState, action: ShoppingActions.ShoppingActions) {
    switch (action.type) {
        case ShoppingActions.ADD_ITEM:
            return addToCart(state, action.payload);
        case ShoppingActions.REMOVE_ITEM:
            return removeFromCart(state, action.payload.name);
        default:
            return state;
    }
}
