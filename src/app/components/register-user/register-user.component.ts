import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Validation from 'src/app/app.component';
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
  loading: boolean;

  constructor(private fb: FormBuilder, private fireService: FireStoreConnection, private toast: ToastrService,
              private router: Router) { 
    this.registerUser = this.fb.group({
      names: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repeatPass: ['', [Validators.required, Validators.minLength(6)]]
    },
    {
      validators: [Validation.match('password', 'repeatPass')]
    }
    );
  }

  ngOnInit(): void {
  }
  get f(): { [key: string]: AbstractControl } {
    return this.registerUser.controls;
  }
  register(): void {
    if (this.registerUser.valid && this.validatePass()) {
      const form = this.registerUser.value;
      this.user = new User();
      this.user.names = form.names;
      this.user.lastNames = form.lastName;
      this.user.address = form.address;
      this.user.phone = form.phone;
      this.user.email = form.email;
      this.user.pass = '';
      
      this.fireService.createLogin(this.user.email, form.password).then(response => {
        this.loading = true;
        if (response) {
          this.createUser(response.user!.uid);
        }
      }).catch(error => {
        this.loading = false;
        this.toast.error(this.fireService.firebaseError(error.code), 'Error!');
      })
    } else {
      console.log(this.registerUser)
      this.toast.error('Formulario incompleto', 'Error')
    }
    
  }

  createUser(id: string) {
    this.user.id = id;
    this.fireService.createUser(this.user).then(() => {
      this.verifiedEmail();
    }).catch(() => {
      this.toast.error('Error al crear el usuario', 'Error')
      this.loading 
    }).finally(()=> this.loading = false)

  }

  validatePass(): boolean {
    const form = this.registerUser.value;
    return form.password == form.repeatPass;
  }

  verifiedEmail() {
    this.fireService.verifiedEmail().then(() => {
      this.toast.info('Enviamos un correo para verificar tu usuario', 'Verifica tu correo!!!')
    })
    .catch(error => {
      console.error(error)
    });
    
  }
}
