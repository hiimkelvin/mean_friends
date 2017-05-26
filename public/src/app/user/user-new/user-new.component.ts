import { RouterModule, Routes, Router } from '@angular/router';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {

  constructor(private _userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  addUser(formData){
    // console.log(formData);
    this._userService.addUser(formData.value)
    .then( () => this.router.navigate(['/friends']))
    .catch( err => alert(err))
  }
}
