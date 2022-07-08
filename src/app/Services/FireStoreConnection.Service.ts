import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../Models/Class/User';
import { FirebaseCodeEnum } from '../Utils/firebase-code-error';

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

  firebaseError(code: string) {
    switch (code) {
      // Correo ya existe
      case FirebaseCodeEnum.EmailAlreadyUse:
        return 'El usuario ya existe'
        // Password muy debil
      case FirebaseCodeEnum.WeakPassword:
        return 'La contrasenha es muy debil';
        // Email incorrecto
      case FirebaseCodeEnum.InvalidEmail:
        return 'Correo o contranseha invalidas';
        // contrasenha incorrecta
      case FirebaseCodeEnum.WrongPassword:
        return 'Contrasenha incorrecta';
      case FirebaseCodeEnum.UserNotExist:
        return 'El usuario no existe';
      default:
      return 'Error desconocido';
    }
  }

  recoveryPass(email: string) {
    return this.auth.sendPasswordResetEmail(email);
  }

  verifiedEmail() {
    return this.auth.currentUser.then(user => user?.sendEmailVerification())
  }
}
