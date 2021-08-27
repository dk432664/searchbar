import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  socialUser: SocialUser;
  constructor(private router: Router,
    public socialAuthService: SocialAuthService) {
}
home() {
   this.router.navigate(['home']);
  }

signOut()  {
  this.socialAuthService.signOut();
  this.router.navigateByUrl('/login');
}
}












































// const storage = localStorage.getItem('google_auth');

//     if (storage) {
//       this.userDetails = JSON.parse(storage);
//     } else {
//       this.signOut();
//     }


// signOut() : void {
//   localStorage.removeItem('google_auth');
//     this.router.navigateByUrl('/login').then();
// }











// .then(()=>this.router.navigate(['']))
  // .then(() => {
  //   window.location.assign('https://accounts.google.com/Logout')



//   });
// }
