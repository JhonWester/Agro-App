import { Injectable } from '@angular/core';
import { User } from '../Models/Class/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  _user: User;

  constructor() { }

  get User(): User {
    return this._user;
  }
 
  set User(user: User) {
    this._user = user;
  }

  isLoggued(): boolean {
    return this._user !== null;
  }
}
