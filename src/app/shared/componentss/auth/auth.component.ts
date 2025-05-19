import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AuthComponent implements OnInit {
  alreadyHasAccount: boolean = false;
  signUp!: FormGroup;
  logIn!: FormGroup;
  constructor(private _authService: AuthService, private _routes: Router) {}

  ngOnInit(): void {
    this.signUpFormCreate();
    this.logInFormCreate();
  }
  signUpFormCreate() {
    this.signUp = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
      userRole: new FormControl(null, [Validators.required]),
    });
  }
  logInFormCreate() {
    this.logIn = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }
  onsignUp() {
    if (this.signUp.valid) {
      let newUser = this.signUp.value;
      console.log(newUser);

      this._authService.signUpUSer(newUser).subscribe({
        next: (res) => {
          this.signUp.reset();
          this.alreadyHasAccount = true;
        },
        error: (err) => {
          console.log(err.error.message);
        },
      });
    }
  }
  onLogin() {
    if (this.logIn.valid) {
      let userDetails = this.logIn.value;
      this._authService.signInUSer(userDetails).subscribe({
        next: (res) => {
          console.log(res);
          this._authService.saveToken(res.token, res.userRole);
          this.logIn.reset();
          this._routes.navigate(['/home']);
        },
        error: (err) => {
          console.log(err.error.message);
        },
      });
    }
  }
}
