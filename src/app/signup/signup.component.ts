import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { usernameValidator } from "src/app/signup/username.validator";

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  form = new FormGroup({
    username: new FormControl('Enter userName',[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(12),
      usernameValidator.cannotContainSpace
    ]),
    password: new FormControl('',Validators.required)
  });

  get username(){return this.form.get('username');}
  get password(){return this.form.get('password');}

}
