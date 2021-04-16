import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

import {Router} from '@angular/router';
import validate = WebAssembly.validate;
import {Spacevalidator} from '../../model/spacevalidator';
import {AuthenticationService} from '../../service/authentication.service';

@Component({
  selector: 'app-regiser',
  templateUrl: './regiser.component.html',
  styleUrls: ['./regiser.component.css']
})
export class RegiserComponent implements OnInit {

  logInFormGroup: FormGroup;
  invalidMessage: string;

  constructor(private formBuilder: FormBuilder,
              // private loginService: LoginService,
              private auth: AuthenticationService,
              private route: Router) {
  }

  ngOnInit(): void {
    this.logInFormGroup = this.formBuilder.group({
      admin: this.formBuilder.group({
        userName: new FormControl('', [Validators.required, Validators.minLength(4), Spacevalidator.noOnlyWithSpace]),
        password: new FormControl('', [Validators.required, Validators.minLength(4), Spacevalidator.noOnlyWithSpace])
      })
    });
  }

  // tslint:disable-next-line:typedef
  get userName() {
    return this.logInFormGroup.get('admin.userName');
  }

  get password() {
    return this.logInFormGroup.get('admin.password');
  }

  OnSubmit() {
    if (this.logInFormGroup.invalid) {
      this.logInFormGroup.markAllAsTouched();
    } else {
      //   const result = this.loginService.login(this.logInFormGroup.get('admin').value.userName, this.logInFormGroup.get('admin').value.password)
      //   if (result == true) {
      //     this.route.navigateByUrl('students');
      //   } else {
      //     this.invalidMessage = 'Invalid UserName and Password';
      //     this.showMessage()
      //   }

      this.auth.executeAuthentication(this.logInFormGroup.get('admin').value.userName, this.logInFormGroup.get('admin').value.password).subscribe(
        data => {
          console.log(data);
          this.route.navigateByUrl('students');
        }, error => {
          this.invalidMessage = 'Invalid UserName and Password';
          this.showMessage();
        }
      );

    }
  }

  showMessage() {
    setTimeout(() => {
      this.invalidMessage = '';
    }, 3000);
  }
}
