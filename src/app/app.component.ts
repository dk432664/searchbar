import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[CartService]
})
export class AppComponent{
  
  //  constructor(private cartService:CartService,private route:Router ){

  //  }

}


  














// title = 'searchbar';
  //  searchText: string | number;
//  productList :{name:string,specification:string,price:number}[]=[];
  // cartProductList  = [];
 
  // addProductToCart(product) {
  //   const productExistInCart = this.cartProductList.find(({name}) => name === product.name); 
  //   if (!productExistInCart) {
  //     this.cartProductList.push({...product, num:1}); 
  //     return;
  //   }
  //   productExistInCart.num += 1;
   
      
  // }
  // ngOnInit()
  // {
    // this.cartProductList.forEach(item =>{
    //   this.totalPrice+=(item.productList.price *  item.productExistInCart.num)
      
    //   })
  //  this.productList= this.cartService.productList;
  //  return this.cartService.updateFilter(this.searchText);
  // }
  //  removeProduct(product) {
  //   this.cartProductList = this.cartProductList.filter(({name}) => name !== product.name)
    
  //  }
  
  //  updateFilter(searchText: string | number="mobile"){
  //   this.searchText = searchText;
  // }
   
  
 
 
  // productList= [
  //   { name:'Mi 10 i 5G',             specification: '6GB RAM 128GB Storage',  price: 21000 },
  //   { name:'One Plus 9 Pro 5G',      specification: '6GB RAM 128GB Storage' , price:25000 },
  //   { name:'Samsung Galaxy M42 5G',  specification: '6GB RAM 128GB Storage' , price:29000 },
  //   { name:'MI 10T Pro 5G',          specification: '6GB RAM 128GB Storage' , price: 31000 },
  //   { name:'Oppo A74 5G',            specification: '6GB RAM 128GB Storage' , price: 15000 },
  //   { name:'One Plus 9R 5G',         specification: '6GB RAM 128GB Storage' , price: 17000 },
  //   { name:'iQOO Z3 5G',             specification: '6GB RAM 128GB Storage' , price: 19000 },
  //   { name:'OPPO F19 Pro 5G',        specification: '6GB RAM 128GB Storage'  ,price:10000},
  //   { name:'One Plus Nord 2 5G',     specification: '6GB RAM 128GB Storage'  ,price: 20000},
  //   { name:'iQOO 7 Legend 5G',       specification: '6GB RAM 128GB Storage' , price: 22000},
  //   { name:'One Plus 8T 5G',         specification: '6GB RAM 128GB Storage',  price: 24000 },
  //   { name:'Apple iphone 12 Pro Max',specification: '6GB RAM 128GB Storage'  ,price:26000},
  //   { name:'One Plus 9 5G',          specification: '6GB RAM 128GB Storage' , price: 26500 },
  //   { name:'Samsung Galaxy S21',     specification: '6GB RAM 128GB Storage' , price: 31000 },
  //   { name:'Realme X7 Pro 5G',       specification: '6GB RAM 128GB Storage' , price: 33000},
  //   { name:'Vivo Y9',                specification: '6GB RAM 128GB Storage' , price: 35000},
  //   { name:'Mi 10 Twilight',         specification: '6GB RAM 128GB Storage' , price: 39000},
  //   { name:'BlackBerry X94',         specification: '6GB RAM 128GB Storage' , price: 40000},
  //   { name:'Redmi Note 10',          specification: '6GB RAM 128GB Storage' , price: 41000},
  //   { name:'Micromax 5992',          specification: '6GB RAM 128GB Storage' , price: 17600}
  // ]; 

 
   
  


