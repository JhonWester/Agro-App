import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FireStoreConnection } from 'src/app/Services/FireStoreConnection.Service';

@Component({
  selector: 'app-recovery-password',
  templateUrl: './recovery-password.component.html',
  styleUrls: ['./recovery-password.component.css']
})
export class RecoveryPasswordComponent implements OnInit {

  recoveryForm: FormGroup;

  constructor(private fireService: FireStoreConnection, private fb: FormBuilder, private toast: ToastrService, private router: Router) { 
    this.recoveryForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
  }

  recovery() {
    if (this.recoveryForm.valid) {
      const email = this.recoveryForm.value.email;
      this.fireService.recoveryPass(email).then(() => {
        this.toast.info('Se ha enviado un correo, para restablecer la contrasenha!!!', "Enviando correo...");
        this.router.navigate(['/login']);
      })
      .catch(error => {
        this.toast.error(this.fireService.firebaseError(error.code), 'Error')
      })
    }
  }
}
