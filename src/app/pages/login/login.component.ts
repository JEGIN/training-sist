import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  pageName = "Login";
  name= new FormControl();
  email= new FormControl();
  password= new FormControl();

  ngOnInit(){
    this.name.reset()
    this.email.reset()
    this.password.reset()
  }

  onSubmit(){
    console.log(this.email.value, this.name.value, this.password.value)
    // this.email.valid && this.password.valid
    if(this.email.value == 'pravileaf@gmail.com' && this.password.value =='123456'){
      console.log('Data validated')
      alert("Successfully Logged in!")
    }else{
      console.log('Something went wrong')
      alert("Something went wrong!")
    }
  }
}
