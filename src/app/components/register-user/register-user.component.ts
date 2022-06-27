import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/Models/Class/User';
import { FireStoreConnection } from 'src/app/Services/FireStoreConnection.Service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  registerUser: FormGroup;
  user: User;

  constructor(private fb: FormBuilder, private fireService: FireStoreConnection) { 
    this.registerUser = this.fb.group({
      names: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      repeatPass: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  register(): void {
    // if (this.registerUser.valid && this.validatePass()) {
    //   const form = this.registerUser.value;
    //   // this.user = new User();
    //   // this.user.names = form.names;
    //   // this.user.lastNames = form.lastName;
    //   // this.user.address = form.address;
    //   // this.user.phone = form.phone;
    //   // this.user.pass = form.pass;
      
    // }
    // console.log(this.registerUser)
    this.user = new User();
      this.user.id = this.fireService.getId();
      this.user.names = 'Adriana';
      this.user.lastNames = 'Garcia Loaiza';
      this.user.address = 'Carrera 4';
      this.user.phone = '31478145465';
      this.user.pass = '12345';

      this.fireService.createUser(this.user)
  }

  validatePass(): boolean {
    const form = this.registerUser.value;
    return form.pass == form.repeatPass;
  }

}
