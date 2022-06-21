import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // eslint-disable-next-line @typescript-eslint/ban-types
  displayErreurLogin: Boolean = false;
  constructor(private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService) { }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  loginForm = this.fb.group({
    email: [, Validators.required],
    password: [, Validators.required],
  });

  ngOnInit() {
  }

  login() {

    this.loginService.login(this.loginForm.value).subscribe(data => {
      if (data == null) {
        this.loginForm.get('password').reset();
        this.displayErreurLogin=true;
        return;
      }

      this.loginForm.reset();
      this.router.navigateByUrl('/product-menu');
    },
      err => {
        console.log(err);
      });
    // console.log(this.loginForm.value);
    // ****
    // routerLink="/product-menu"
  }

}
