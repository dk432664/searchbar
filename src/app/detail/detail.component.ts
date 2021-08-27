import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';
import { ProductListComponent } from '../product-list/product-list.component';
import {Location} from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app-state.model';
import { Observable } from 'rxjs';
import { ShoppingItem } from '../store/shopping-item.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  productList: { name: string, specification: string, price: number, description: string }[] = [];
  product;
  shoppingItems: Observable<Array<ShoppingItem>>;
  user: { id: number, name: string, description: string, specification: string, price: string }
  constructor(private cartService: CartService, private router: Router, private routes: ActivatedRoute
    ,private _location: Location, private store:Store<AppState>) { }

  ngOnInit() {
    this.shoppingItems=this.store.select(store => store.shopping)
    const routep = this.routes.snapshot.paramMap;
    const productid = Number(routep.get('id'));
    // this.product = this.cartService.getProductList().find(product => product.id === productid)
  //  this.product=

  }
  LoadDesc() {
    // this.router.navigate(['']);
    this._location.back();

  }
  // this.products=this.cartService.productList['id'];
  // this.user={
  //   id:this.routes.snapshot.params['id']
  // };
  // this.cartService.productList.forEach((
  //   if(this.cartService.productList[0].id==this.routes.snapshot.params.id){
  //    this.products=
  //   }
  // )=>{

  // })

}
