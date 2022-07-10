import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './components/board/board.component';
import { GraphicComponent } from './components/graphic/graphic.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/init/about-us/about-us.component';
import { ContentsComponent } from './components/init/contents/contents.component';
import { InitComponent } from './components/init/init.component';
import { LoginComponent } from './components/login/login.component';
import { RecoveryPasswordComponent } from './components/recovery-password/recovery-password.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { AuthGuard } from './Services/auth.guard';

const routes: Routes = [
  {path: '', component: InitComponent, 
    children: [
      {path: '', redirectTo: 'index', pathMatch: 'full'},
      {path: 'index', component: ContentsComponent},
      {path: 'about-us', component:AboutUsComponent},
    ]},
  {path: 'login', component: LoginComponent},
  {path: 'register-user', component: RegisterUserComponent},
  {path: 'verify-email', component: VerifyEmailComponent},
  {path: 'recovery-pass', component: RecoveryPasswordComponent},
  {path: 'home', 
    component: HomeComponent, 
    canActivate: [AuthGuard],
    children: [
      {path: '', component: BoardComponent},
      {path: 'board', component: BoardComponent},
      {path: 'graphic', component: GraphicComponent}
    ]},
  {path: '**', redirectTo: 'index', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
