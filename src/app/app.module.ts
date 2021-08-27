import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ShoppingCartComponent } from './shopping-cart.component';
import { CartProductComponent } from './cart-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import {GoogleLoginProvider, SocialLoginModule} from 'angularx-social-login';
import {SocialAuthServiceConfig} from 'angularx-social-login';
import { AuthGuardService } from './auth-guard.service';
import { MainPageComponent } from './main-page/main-page.component';
import { GoogleLoginComponent } from './google-login/google-login.component';
import { GoogleLoginModule } from './google-login/google-login.module';
import { StoreModule } from '@ngrx/store';
import { ShoppingReducer } from './store/shopping.reducer';
import { CartReducer } from './store/cart.reducer';


const appRoutes:Routes=[

  {path: 'login', component: GoogleLoginComponent},
  {path: 'mainpage', component: MainPageComponent, canActivate: [AuthGuardService]},
  {path:'home', component: HomeComponent },
  {path:'detail/:id',component:DetailComponent},
  {path: '**', component: GoogleLoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ShoppingCartComponent,
    CartProductComponent,
    SearchBarComponent,
    DetailComponent,
    HomeComponent,
    MainPageComponent,
    GoogleLoginComponent,

    ],
  imports: [
   BrowserModule,
   GoogleLoginModule,
   FormsModule,
   Ng2SearchPipeModule,
   ReactiveFormsModule,
   RouterModule.forRoot(appRoutes),
   SocialLoginModule,
   StoreModule.forRoot({
     shopping: ShoppingReducer,
     cart: CartReducer
    }),
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin:false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('1061657385657-3rpvmrm6qie446brrraac67oskq5gv3s.apps.googleusercontent.com')
          }]
      } as SocialAuthServiceConfig,
  },AuthGuardService],

  bootstrap: [AppComponent]

})
export class AppModule { }
