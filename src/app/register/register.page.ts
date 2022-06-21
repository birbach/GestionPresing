import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from './service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  // eslint-disable-next-line @typescript-eslint/ban-types
  checkPassword: Boolean = false;

  constructor(private fb: FormBuilder,
    private registerService: RegisterService,
    private router: Router) { }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  registerFrom = this.fb.group({
    name: [, Validators.required],
    email: [, [Validators.required,Validators.email]],
    password: [, Validators.required],
    // eslint-disable-next-line @typescript-eslint/naming-convention
    confirm_password: [, Validators.required],
  });

  ngOnInit() {
  }

  register() {
    console.log(this.registerFrom.value);
    const password = this.registerFrom.get('password').value;
    const confirmPassword = this.registerFrom.get('confirm_password').value;
    if (password !== confirmPassword) {
      this.registerFrom.get('confirm_password').reset();
      this.checkPassword = true;
      return;
    }
    this.registerService.register(this.registerFrom.value).subscribe(data => {
      this.router.navigateByUrl('/product-menu');
      console.log(data);
    }, err => {
      console.log(err);
    });
  }
}
