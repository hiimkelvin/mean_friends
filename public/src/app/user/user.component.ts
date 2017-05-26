import { UserService } from './user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: Array<any>

  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers(){
    this._userService.getUsers()
    .then( users => {
      // console.log(users);
      this.users = users} )
    .catch( response => console.log(response) )
  }

}
