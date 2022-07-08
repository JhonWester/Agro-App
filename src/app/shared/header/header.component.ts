import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FireStoreConnection } from 'src/app/Services/FireStoreConnection.Service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private fireService: FireStoreConnection, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  logout() {
    this.userService.data.unsubscribe();
    this.userService.User = undefined;
    this.fireService.logout().then(() => this.router.navigate(["/login"]));
  }

}
