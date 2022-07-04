import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../Models/Class/User';

@Injectable({
  providedIn: 'root'
})
export class FireStoreConnection {
  pathUsers = 'Users'

  constructor(private fireBase: AngularFirestore, private auth: AngularFireAuth) { 
  }

  createUser(user: User) {
    const collection = this.fireBase.collection(this.pathUsers);
    return collection.doc(user.id).set({...user});
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

  createLogin(email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password)
  }

  getId(): string {
    return this.fireBase.createId();
  }

  login(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  firebaseEmailError(code: string) {
    switch (code) {
      case 'auth/email-already-in-use':
        return 'El usuario ya existe'
      case 'auth/weak-password':
        return 'La contrasenha es muy debil';
      case 'auth/invalid-email':
        return 'Correo invalido'
      default:
        return 'Error desconocido';
    }
    
  }


}
