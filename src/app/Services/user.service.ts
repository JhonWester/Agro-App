import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../Models/Class/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _data: Subscription;
  private _user: User | undefined;

  constructor() { }

  get User(): User | undefined {
    if (!this._user) {
      const data = localStorage.getItem('user');
      this._user = data ? JSON.parse(data) as User : undefined;
    }
    return this._user;
  }
 
  set User(user: User | undefined) {
    if (user != undefined) {
      localStorage.setItem('user', JSON.stringify(user));
    }
    this._user = user;
  }

  set data(sucription: Subscription) {
    this._data = sucription;
  }

  get data(): Subscription {
    return this._data;
  }

  isLoggued(): boolean {
    return this.User !== undefined;
  }
}
