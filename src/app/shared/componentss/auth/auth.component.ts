import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  constructor() {}

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
  onsubmit() {}
}
