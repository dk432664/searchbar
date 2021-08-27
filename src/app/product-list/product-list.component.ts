import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppState } from '../store/app-state.model';
import { ShoppingItem } from '../store/shopping-item.model';
import { AddItem } from  '../store/shopping.actions';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
   shoppingItems: Observable<Array<ShoppingItem>>;

  // @Input() products: any[];

  @Output() productAdded = new EventEmitter();
  @Input() searchText: number | string = "mobile";
  constructor(private router: Router, private route: ActivatedRoute ,
    private store:Store<AppState>) { }

  ngOnInit() {
    this.store.select(store => store.shopping);
    this.store.select(store=>store.cart);
    // this.store.dispatch(new AddItem);
  }
  // addProductToCart(product) {
  //   this.productAdded.emit(product);
  // }

  LoadDesc() {
    this.router.navigate(['detail/:id']);
  }
}



