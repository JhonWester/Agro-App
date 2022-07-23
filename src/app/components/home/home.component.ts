import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { UserService } from 'src/app/Services/user.service';
import { FireStoreConnection } from 'src/app/Services/FireStoreConnection.Service';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/Class/User';
import { ConnectDataService } from 'src/app/Services/connect-data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  user: User;

  constructor(private breakpointObserver: BreakpointObserver, private userService: UserService, private fireService: FireStoreConnection,
              private router: Router, private connetDB: ConnectDataService, private toast: ToastrService) {}
  
  ngOnInit(): void {
    if (this.userService?.User) {
      this.user = this.userService.User ? this.userService.User : new User();
    }
    this.getDataBomb();
  }
  
  logout() {
    if (this.userService?.data) {
      this.user = this.userService.User ? this.userService.User : new User();
      this.userService.data.unsubscribe();
    }
    this.userService.User = undefined;
    localStorage.removeItem('user');
    this.fireService.logout().then(() => this.router.navigate(["/login"]));
  }

  getDataBomb() {
    this.connetDB.getBombState().subscribe(res => {
      if (res) {
        this.toast.success(`La bomba y el sistema de riego esta activa!!!`, 'Info', { positionClass: 'toast-bottom-right'});
      } else {
        this.toast.info(`La Bomba y el sistema de riego ha sido desactivado!!!`, 'Info', { positionClass: 'toast-bottom-right'});
      }
    })
  }

}
