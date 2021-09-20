import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', '../../../../assets/css/sb-admin-2.css']
})
export class RegisterComponent implements OnInit {
  formRegister: FormGroup
  constructor(private fb: FormBuilder,private user:UsersService,private router:Router) {
    let formControls =
    {
      firstname: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z .'-]*"),
        Validators.minLength(2)
      ]),
      lastname: new FormControl('',[
        Validators.required,
        Validators.pattern("[a-z .'-]*"),
        Validators.minLength(2)
      ]),
      email: new FormControl('',[
      Validators.required,
      Validators.email
      ]),
      password: new FormControl('',[
      Validators.required,
      Validators.minLength(6)
      ]),
      repassword: new FormControl('',
      Validators.required
      )
    }
    this.formRegister = this.fb.group(formControls);

  }

  ngOnInit(): void {
    let isLoggedIn=this.user.isLoggedIn();
    if(isLoggedIn){
      this.router.navigateByUrl('/home')}
  }
  register(){
    console.log(this.formRegister.value);
    let data=this.formRegister.value;
    let user=new User(undefined,data.firstname,data.lastname,data.email,data.password,undefined,undefined)
    this.user.register(user).subscribe(
res=>console.log(res),
err=>console.log(err)

    )
  
  
  }
  get firstname() {
    return this.formRegister.get('firstname');
  }
  get lastname() {
    return this.formRegister.get('lastname');
  }
  get email() {
    return this.formRegister.get('email');
  }
  get password() {
    return this.formRegister.get('password');
  }
  get repassword(){
    return this.formRegister.get('repassword')
  }
}
