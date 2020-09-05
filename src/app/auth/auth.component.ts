import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Token } from '../model/token';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  authForm: FormGroup;

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.authForm  =  this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
  });
  }

  get formControls() { return this.authForm.controls; }

  signIn(){
    if (this.authForm.invalid){
      return;
    }
    this.authService.signIn(this.authForm.value)
    .subscribe((token: Token) => {
      console.log(this.authForm.value);
      localStorage.setItem('ACCESS_TOKEN', token.token);
      this.router.navigateByUrl('/admin');
    });
   
  }

}
