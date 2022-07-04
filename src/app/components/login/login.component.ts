import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr/toastr/toastr.service';
import { FireStoreConnection } from 'src/app/Services/FireStoreConnection.Service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  loading: boolean;

  constructor(private fireService: FireStoreConnection, private fb: FormBuilder, private toast: ToastrService,
              private router: Router) { 
    this.formLogin = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  getUser() {
  }

  doLogin(): void {
    if (this.formLogin.valid) {
      this.loading = true;
      const form = this.formLogin.value;
      this.fireService.login(form.email, form.password).then(() => {
        this.router.navigate(['/dashboard']);
      })
      .catch(error => {
        this.toast.error('Error', 'Error')
      })
      .finally(() => this.loading = false)
    }
  }

}
