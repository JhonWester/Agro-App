import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../Models/Class/User';

@Injectable({
  providedIn: 'root'
})
export class FireStoreConnection {
  pathUsers = 'Users/'

  constructor(private fireBase: AngularFirestore) { 
  }

  createUser(user: User) {
    const collection = this.fireBase.collection(this.pathUsers);
    return collection.doc(this.pathUsers).set({...user});
  }

  getUser(id: string) {
    const collection = this.fireBase.collection(this.pathUsers);
    return collection.doc(id).valueChanges();
  }

  deleteUser(id: string) {
    const collection = this.fireBase.collection(this.pathUsers);
    return collection.doc(id).delete();
  }

  updateUser(data: User, id: string) {
    const collection = this.fireBase.collection(this.pathUsers);
    return collection.doc(id).update(data);
  }

  getId(): string {
    return this.fireBase.createId();
  }
}
