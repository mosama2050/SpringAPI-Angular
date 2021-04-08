import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../service/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  isAuthenticaterUser(){
    return this.isAuthenticaterUser();
  }

}
