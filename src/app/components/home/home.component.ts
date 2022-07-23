import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { UserService } from 'src/app/Services/user.service';
import { FireStoreConnection } from 'src/app/Services/FireStoreConnection.Service';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/Class/User';

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
              private router: Router) {}
  
  ngOnInit(): void {
    if (this.userService?.User) {
      this.user = this.userService.User ? this.userService.User : new User();
    }

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

}
