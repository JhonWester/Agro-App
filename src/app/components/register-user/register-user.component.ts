import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
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

  constructor(private fb: FormBuilder, private fireService: FireStoreConnection, private toast: ToastrService) { 
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
    if (this.registerUser.valid && this.validatePass()) {
      const form = this.registerUser.value;
      this.user = new User();
      this.user.names = form.names;
      this.user.lastNames = form.lastName;
      this.user.address = form.address;
      this.user.phone = form.phone;
      this.user.pass = '';
      
      this.fireService.createLogin(this.user.email, form.pass).then(response => {
        if (response) {
          this.createUser(response.user!.uid);
        }
      }).catch(error => {
        this.toast.error(this.fireService.firebaseEmailError(error), 'Error!');
      })
    } else {
      this.toast.error('Formulario incompleto', 'Error')
    }
    
  }

  createUser(id: string) {
    this.user.id = id;
    const success = this.fireService.createUser(this.user).catch(() => {
      this.toast.error('Error al crear el usuario', 'Error')
    });

    if (success != null) {
      this.toast.error('Usuario creado con exito!!!', 'Exito')
    }
  }

  validatePass(): boolean {
    const form = this.registerUser.value;
    return form.pass == form.repeatPass;
  }

}
