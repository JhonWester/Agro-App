import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './components/board/board.component';
import { DthGraphicComponent } from './components/graphic/dth-graphic/dth-graphic.component';
import { GraphicComponent } from './components/graphic/graphic.component';
import { HumidityGraphComponent } from './components/graphic/humidity-graph/humidity-graph.component';
import { LightGraphicComponent } from './components/graphic/light-graphic/light-graphic.component';
import { ReportGraphicComponent } from './components/graphic/report-graphic/report-graphic.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/init/about-us/about-us.component';
import { ContentsComponent } from './components/init/contents/contents.component';
import { InitComponent } from './components/init/init.component';
import { ProjectComponent } from './components/init/project/project.component';
import { SolutionsComponent } from './components/init/solutions/solutions.component';
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
      {path: 'project', component: ProjectComponent},
      {path: 'solutions', component: SolutionsComponent},
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
      {path: 'graphic', 
      component: GraphicComponent,
      children: [
        {path: '', component: DthGraphicComponent},
        {path: 'dth-graphic', component: DthGraphicComponent},
        {path: 'df-graphic', component: HumidityGraphComponent},
        {path: 'light-graphic', component: LightGraphicComponent},
        {path: 'report-graphic', component: ReportGraphicComponent}
      ]
    }
    ]},
  {path: '**', redirectTo: 'index', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
