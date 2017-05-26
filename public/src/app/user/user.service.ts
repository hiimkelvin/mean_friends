import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';

@Injectable()
export class UserService {

  constructor(private _http: Http) { }

  getUsers(){
    return this._http.get('/api/friends')
    .map( (users: Response) => users.json() )
    .toPromise();
  }

  addUser(formData){
    return this._http.post('/api/friends', formData)
    .map( (users: Response) => users.json()).toPromise()
  }

  showUser(id){
    // console.log(id);
    return this._http.get('/api/friends/show/' + id)
    .map( (current_user: Response) => current_user.json())
    .toPromise() 
  }

  editUser(id){
    // console.log(id);
    return this._http.put('/api/friends/edit/', id)
    .map( (current_user: Response) => current_user.json())
    .toPromise()
  }

  destroyUser(id){
    return this._http.delete('/api/friends/destroy/' + id)
    .map( (users: Response) => users.json())
    .toPromise()
  }


}
