import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-show',
  templateUrl: './user-show.component.html',
  styleUrls: ['./user-show.component.css']
})
export class UserShowComponent implements OnInit {
  user_id: String;
  user = {};

  constructor(
    private _route: ActivatedRoute,
    private _userService: UserService,
  ) { }

  ngOnInit() {
    this._route.params.subscribe((param) => {
      this.user_id = param.id;
    })
    this.showUser(this.user_id);
    // console.log(this.user_id);  
  }

  showUser(id){
    // console.log(id);
    this._userService.showUser(id)
    .then( current_user => this.user = current_user)
    .catch( err => console.log(err))
  }

}
