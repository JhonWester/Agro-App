import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/Models/Class/User';
import { FireStoreConnection } from 'src/app/Services/FireStoreConnection.Service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  loading: boolean;

  constructor(private fireService: FireStoreConnection, private fb: FormBuilder, private toast: ToastrService,
              private router: Router, private userService: UserService) { 
    this.formLogin = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  getUser(id: string) {
    this.fireService.getUser(id).subscribe((res: any)=> {
      this.userService.User = res as User;
      this.router.navigate(['/home']);
      this.loading = false;
    }, 
    error => {
      this.toast.error('Error obtieniendo el usuario', 'Error!!!')
    })
  }

  doLogin(): void {
    if (this.formLogin.valid) {
      this.loading = true;
      const form = this.formLogin.value;
      this.fireService.login(form.email, form.password).then((response: any) => {
        this.getUser(response.user.uid);
      })
      .catch(error => {
        this.toast.error('Error en las credenciales', 'Error')
      })
    }
  }

}
