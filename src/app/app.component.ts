import { Component } from '@angular/core';
import { UserProvider } from '../providers/user/user';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  xxx:string;

  constructor( public userProvider: UserProvider) {
    userProvider.hasLoggedIn().then((isLoggedIn)=>{
      if (isLoggedIn) {
        this.rootPage = HomePage;
      } else {
        this.rootPage = LoginPage;
      }
   });
 }
}

