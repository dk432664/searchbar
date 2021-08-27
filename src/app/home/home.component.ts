import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AddItem } from '../store/shopping.actions';
import { CartService } from '../cart.service';
import { AppState } from '../store/app-state.model';
import { RemoveItem } from '../store/shopping.actions';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [CartService]
})
export class HomeComponent implements OnInit {
  searchText: string | number;
  productList: { }[] = [];
  cartProductList = [];

  constructor(private cartService: CartService, route: Router,
   private store:Store<AppState> ) { }

  ngOnInit() {

    // this.productList = this.cartService.getProductList();

  }
  // addProductToCart(product)
  // {
  //   return this.store.dispatch(new AddItem(product));
  // }
  // addProductToCart(product) {
  //   const productExistInCart = this.cartProductList.find(({ name }) => name === product.name);
  //   if (!productExistInCart) {
  //     this.cartProductList.push({ ...product, num: 1 });
  //     return;
  //   }
  //   productExistInCart.num += 1;


  // }
  // removeProduct(product) {
    // this.cartProductList = this.cartProductList.filter(({ name }) => name !== product.name)
    // this.store.dispatch(new RemoveItem(product));

  // }
  updateFilter(searchText: string | number = "mobile") {
    this.searchText = searchText
  }

}

//  name: string, specification: string, price: number
