import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Modules
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat'
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgChartsModule } from 'ng2-charts';


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
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BoardComponent } from './components/board/board.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { FooterComponent } from './shared/footer/footer.component';
import { GraphicComponent } from './components/graphic/graphic.component';
import { InitComponent } from './components/init/init.component';
import { SectionComponent } from './components/init/section/section.component';
import { AboutUsComponent } from './components/init/about-us/about-us.component';
import { ContentsComponent } from './components/init/contents/contents.component';
import { ProjectComponent } from './components/init/project/project.component';
import { SolutionsComponent } from './components/init/solutions/solutions.component';
import { HttpClientModule } from '@angular/common/http';
import { DthGraphicComponent } from './components/graphic/dth-graphic/dth-graphic.component';
import { HumidityGraphComponent } from './components/graphic/humidity-graph/humidity-graph.component';
import { LightGraphicComponent } from './components/graphic/light-graphic/light-graphic.component';
import { ReportGraphicComponent } from './components/graphic/report-graphic/report-graphic.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegisterUserComponent,
    VerifyEmailComponent,
    RecoveryPasswordComponent,
    SpinnerComponent,
    HeaderComponent,
    HomeComponent,
    BoardComponent,
    FooterComponent,
    GraphicComponent,
    InitComponent,
    SectionComponent,
    AboutUsComponent,
    ContentsComponent,
    ProjectComponent,
    SolutionsComponent,
    DthGraphicComponent,
    HumidityGraphComponent,
    LightGraphicComponent,
    ReportGraphicComponent
  ],
  imports: [
    NgChartsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), LayoutModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
