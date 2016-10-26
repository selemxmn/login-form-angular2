import { Component, OnInit } from '@angular/core';
import {AuthenticateService} from "./loginService/authenticate.service";
import {UserComponent} from "../user/user.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers : [AuthenticateService]
})
export class LoginComponent implements OnInit {
  public user = new UserComponent('','');
  public errorMsg = '';
  constructor(
    private _service:AuthenticateService
  ) { }

  ngOnInit() {
  }
  login() {
    if(!this._service.login(this.user)){
      this.errorMsg = 'Failed to login! try again ...';
    }
  }
}
