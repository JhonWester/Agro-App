import { Component, OnInit } from '@angular/core';
import { FireStoreConnection } from 'src/app/Services/FireStoreConnection.Service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private dbFire: FireStoreConnection) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    //this.dbFire.getDoc();
  }

}
