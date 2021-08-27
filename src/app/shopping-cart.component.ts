import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from './store/app-state.model';
import { ShoppingItem } from './store/shopping-item.model';
import { RemoveItem } from './store/shopping.actions';
@Component({
  selector: 'shopping-cart',
  template: `
  <div class="card mt-2 pt-2 ps-2 ms-2 mb-2 pb-2">
  <h5 class="mt-2 pt-2">Checkout Cart  QuantityPurchased:({{calcQuantity()}}) TotalAmount:({{ totalPrice()}})</h5>
  <!-- <cart-product *ngFor="let product of products" [product]="product" (productRemoved)="removeProduct($event)"></cart-product> -->
  <cart-product *ngFor="let shopping of shoppingItems|async"  (productRemoved)="removeProduct($event)"></cart-product>
  <!--  [product]="product"  -->
</div>
  <div>
  </div>
  `,
  styles: []
})
export class ShoppingCartComponent implements OnInit {
  @Input() products: any[];
  items:ShoppingItem[];
  cartTotal:number;
  @Output() productRemoved = new EventEmitter();
  shoppingItems: Observable<Array<ShoppingItem>>;
  constructor(private store:Store<AppState>) {}
  ngOnInit()
  {
  this.shoppingItems=this.store.select(store=> store.shopping);
  this.calcQuantity();
  this.totalPrice();
}
  calcQuantity() {
    // this.shoppingItems.subscribe(x=>this.items=x);

    return (this.products.reduce((acc, prod) => acc += prod.num, 0));
  }

  totalPrice() {
    // return (this.products.reduce((acc, prod) => acc += prod.num * prod.price, 0));
    this.shoppingItems.subscribe(x => this.items = x);
        // this.cartTotal = this.items.reduce((acc, currentValue) => acc + =currentValue, 0);
  }
  removeProduct(product) {
    this.productRemoved.emit(product)
  }
  // removeProduct(name:string) {
    // this.productRemoved.emit(product)
  //   this.store.dispatch(new RemoveItem(name));
  // }
}
