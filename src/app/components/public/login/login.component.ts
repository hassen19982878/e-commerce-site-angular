import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','../../../../assets/css/sb-admin-2.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup

  constructor(private fb: FormBuilder,private router:Router,private user:UsersService) {
    let formControls =
    {
      email: new FormControl('',[
      Validators.required,
      Validators.email
      ]),
      password: new FormControl('',[
      Validators.required,
      Validators.minLength(6)
      ]),
      
    }
    this.formLogin = this.fb.group(formControls);

  }

  ngOnInit(): void {
let isLoggedIn=this.user.isLoggedIn();
if(isLoggedIn){
  this.router.navigateByUrl('/home')
}

  }
  login(){
    console.log(this.formLogin.value)
    let data=this.formLogin.value;
    let user=new User(null,null,null,data.email,data.password,data.role,data.accountState)
    console.log(user)
    this.user.login(user).subscribe(
res=>{console.log(res);
  let token=res.token;
localStorage.setItem("my-token",token);
this.router.navigateByUrl('/home')


},
err=>console.log(err)

    )
  
  }

  get email() {
    return this.formLogin.get('email');
  }
  get password() {
    return this.formLogin.get('password');
  }


}
