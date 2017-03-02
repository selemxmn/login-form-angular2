import { Component, OnInit } from '@angular/core';
import {AuthenticateService} from "../login/loginService/authenticate.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [AuthenticateService],
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data= [
    {
      "id": "X999_Y999",
      "from": {
        "name": "Tom Brady", "id": "X12"
      },
      "message": "Looking forward to 2010!",
      "actions": [
        {
          "name": "Comment",
          "link": "http://www.facebook.com/X999/posts/Y999"
        },
        {
          "name": "Like",
          "link": "http://www.facebook.com/X999/posts/Y999"
        }
      ],
      "type": "status",
      "created_time": "2010-08-02T21:27:44+0000",
      "updated_time": "2010-08-02T21:27:44+0000"
    },
    {
      "id": "X999_Y977",
      "from": {
        "name": "Jim Kazama", "id": "X12"
      },
      "message": "How are you guys !",
      "actions": [
        {
          "name": "Comment",
          "link": "http://www.facebook.com/X999/posts/Y999"
        },
        {
          "name": "Like",
          "link": "http://www.facebook.com/X999/posts/Y999"
        }
      ],
      "type": "status",
      "created_time": "2010-08-02T21:27:44+0000",
      "updated_time": "2010-08-02T21:27:44+0000"
    },
    {
      "id": "X999_Y89",
      "from": {
        "name": "Paul varch", "id": "X12"
      },
      "message": "I Love my self :V !",
      "actions": [
        {
          "name": "Comment",
          "link": "http://www.facebook.com/X999/posts/Y89"
        },
        {
          "name": "Like",
          "link": "http://www.facebook.com/X999/posts/Y89"
        }
      ],
      "type": "status",
      "created_time": "2010-08-02T21:27:44+0000",
      "updated_time": "2010-08-02T21:27:44+0000"
    },
    {
      "id": "X998_Y998",
      "from": {
        "name": "Peyton Manning", "id": "X18"
      },
      "message": "Where's my contract?",
      "actions": [
        {
          "name": "Comment",
          "link": "http://www.facebook.com/X998/posts/Y998"
        },
        {
          "name": "Like",
          "link": "http://www.facebook.com/X998/posts/Y998"
        }
      ],
      "type": "status",
      "created_time": "2010-08-02T21:27:44+0000",
      "updated_time": "2010-08-02T21:27:44+0000"
    }
  ];
  constructor(private _service:AuthenticateService) { }

  ngOnInit() {
    this._service.checkCredentials();
    this.loadProfiles();
  }

  loadProfiles(){
    for (var sd in this.data) {
      var a= this.data[0];
    }
   }

  logout():void {
    this._service.logout();
  }
}
