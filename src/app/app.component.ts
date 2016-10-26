import { Component } from '@angular/core';
import {LoginComponent} from "./login/login.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  entryComponents: [LoginComponent],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'app works!';

}

