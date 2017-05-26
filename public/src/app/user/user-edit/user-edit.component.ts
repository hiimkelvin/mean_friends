import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  user_id: String;
  user;

  constructor(
     private _route: ActivatedRoute,
     private _userService: UserService,
     private router: Router,
  ) { }

  ngOnInit() {
    this._route.params.subscribe((param) => {
      this.user_id = param.id;
    })
    this.showUser(this.user_id);
  }

  showUser(id){
    // console.log(id);
    this._userService.showUser(id)
      .then( current_user => this.user = current_user)
      .catch( err => console.log(err))
  }

  editUser(){
  // console.log(this.user);
    this._userService.editUser(this.user)
      .then(() => this.router.navigate(['/friends']))
      .catch( err => console.log(err))
  }

}
