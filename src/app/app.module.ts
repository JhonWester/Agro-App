import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Modules
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat'
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


// Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { RecoveryPasswordComponent } from './components/recovery-password/recovery-password.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegisterUserComponent,
    VerifyEmailComponent,
    RecoveryPasswordComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
