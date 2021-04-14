import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../service/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  constructor(private loginService: LoginService,
              private route: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  isAuthenticaterUser(){
    return this.loginService.isLogin();
  }
  // tslint:disable-next-line:typedef
  logOut(){
    this.loginService.logOut();
    this.route.navigateByUrl('register');

  }

  done(name: String) {
    this.route.navigateByUrl(`students/${name}`)
  }

}
