import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from './../user.service';

@Component({
  selector: 'app-user-destroy',
  templateUrl: './user-destroy.component.html',
  styleUrls: ['./user-destroy.component.css']
})
export class UserDestroyComponent implements OnInit {
  user = {};

  constructor(
    private _userService: UserService,
    private _route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this._route.params.subscribe((param) => {
      this.user = param.id;
    })
    
    this.destroyUser(this.user);
    // console.log(this.user);
  }

  destroyUser(id){
    // console.log(id);
    this._userService.destroyUser(id)
    // .then( current_user => this.user = current_user)
    .then(() => this.router.navigate(['/friends']))
    .catch( err => console.log(err))
  }


}
