import { Component,  OnDestroy,  OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {GoogleLoginProvider, SocialAuthService, SocialUser} from 'angularx-social-login';
import { Subscription } from 'rxjs';
import { subscribeOn } from 'rxjs/operators';
@Component({
  selector: 'app-google-login',
  templateUrl: './google-login.component.html',
  styleUrls: ['./google-login.component.css']
})
export class GoogleLoginComponent implements OnInit  {

user:SocialUser;
loggedIn:boolean;

constructor(private router: Router,
      private socialAuthService: SocialAuthService) {
   }
   ngOnInit() {
    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      console.log(user);
      this.loggedIn = (user != null);
    });
  }

loginWithGoogle(): void{
  this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then((data) => {
  this.router.navigateByUrl('/mainpage').then();
  });
}


}









































// loginWithGoogle(): void{
//   this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then((data) => {

//     localStorage.setItem('google_auth', JSON.stringify(data));
//     this.router.navigateByUrl('/mainpage').then();
//   });
// }



