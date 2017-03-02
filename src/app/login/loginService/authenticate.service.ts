import { Injectable } from '@angular/core';
import {UserComponent} from "../../user/user.component";
import { Router } from '@angular/router';

var users = [
  new UserComponent('admin','admin'),
  new UserComponent('admin1','admin1')
];

@Injectable()
export class AuthenticateService {

  constructor(private _router: Router) { }

  logout() {
    localStorage.removeItem("user");
    this._router.navigate(['/login']);
  }

  login(user) {
    let authenticatedUser = users.find(u => u.username === user.username);
    if (authenticatedUser && authenticatedUser.password === user.password){
      localStorage.setItem("user", authenticatedUser.username);
      this._router.navigate(['/home']);
      return true;
    }
    return false;
  }

  checkCredentials() {
    if (localStorage.getItem("user") === null){
      this._router.navigate(['/login']);
    }
  }
}
