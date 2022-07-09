import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './components/board/board.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RecoveryPasswordComponent } from './components/recovery-password/recovery-password.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { AuthGuard } from './Services/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register-user', component: RegisterUserComponent},
  {path: 'verify-email', component: VerifyEmailComponent},
  {path: 'recovery-pass', component: RecoveryPasswordComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard], canLoad: [AuthGuard],
    children: [
      {path: 'dashboard', component: BoardComponent}
    ]},
  {path: '**', redirectTo: 'login', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
