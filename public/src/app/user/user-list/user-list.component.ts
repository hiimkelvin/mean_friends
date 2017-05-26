import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: Array<any>
  user = {};

  constructor(
    private _userService: UserService,
  ) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers(){
    this._userService.getUsers()
    .then( all_users => {
      // console.log(all_users);
      this.users = all_users} )
    .catch( response => console.log(response) )
  }  

}
