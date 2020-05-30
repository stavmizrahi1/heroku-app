import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { TokenService } from '../token.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from 'src/app/provider/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string;
  showSpinner = false;
  adminDetails: User = {
    _id: '-1',
    username: 'admin',
    password: '12345678',
    chatList: null,
    email: null,
    notifications: null,
    nation: null,
    posts: null,
    religion: null,
    userType: null
  };

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private tokenService: TokenService
  ) { }

  ngOnInit() {
    this.init();
  }

  init() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  loginAdmin() {

  }

  loginUser() {
    this.showSpinner = true;
    if (this.loginForm.controls.username.value === this.adminDetails.username
      && this.loginForm.controls.password.value === this.adminDetails.password) {
      this.authService.setLoginAsAdmin(this.adminDetails);

      this.loginForm.reset();
      this.router.navigate(['setting']);
    } else {
      this.authService.loginUser(this.loginForm.value).subscribe(
        data => {
          this.tokenService.SetToken(data.token);
          this.authService.setLogonUserDetails(data.user._id);
          this.loginForm.reset();
          this.router.navigate(['people']);
        },
        err => {
          this.showSpinner = false;

          if (err.error.message) {
            this.errorMessage = err.error.message;
          }
        }
      );
    }
  }


}
