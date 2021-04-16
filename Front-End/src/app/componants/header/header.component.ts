import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import {AuthenticationService} from '../../service/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  constructor(private loginService: AuthenticationService,
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
