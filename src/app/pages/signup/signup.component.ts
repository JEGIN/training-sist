import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgFor],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  pageName = "Sign Up"
  countries = ["India", "USA", "Japan", "Australia"]
  genders = ['Male', 'Female', 'Others']

  constructor(private _router: Router) {

  }

  ngOnInit() {
    this.signUpForm.reset()
  }


  signUpForm = new FormGroup(
    {
      fname: new FormControl('Sathybama'),
      lname: new FormControl('University'),
      email: new FormControl('example@email.com'),
      password: new FormControl(Validators.pattern('[A-Za-z0-9!@#$%^&]{6, 12}')),
      confirm_password: new FormControl(Validators.pattern('[A-Za-z0-9!@#$%^&]{6, 12}')),
      age: new FormControl('', Validators.required),
      gender: new FormControl('Male', Validators.required),
      country: new FormControl(this.countries[0], Validators.required),
      address: new FormControl('Street 45, Bengaluru')
    }
  )

  signUp() {
    console.log(this.signUpForm.value);

    if (this.signUpForm.invalid) {
      console.log('The form is invalid!')
      alert('The form is invalid!')
      return;
    }
    if (this.signUpForm.value.password === this.signUpForm.value.confirm_password) {
      console.log('Both Password Matches')
      alert("Registered your account!")
      this.storeUserRecord()

      this._router.navigate(['/dashboard'])
    } else {
      console.log('Something went wrong')
      alert("Something went wrong!")
    }
  }

  signIn() {
    this._router.navigate(['login'])
  }

  storeUserRecord() {
    localStorage.setItem('userInfo', JSON.stringify(this.signUpForm.value))
    console.log(localStorage.getItem('userInfo'))
    console.log('Local storage has been set')
  }
}
