import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private mainService:MainServiceService,
              private router : Router) { }
  user:FormGroup;

  ngOnInit(): void {
    this.user = new FormGroup({
      username:new FormControl(),
      password:new FormControl(),
    })
  }

  login()
  {
    console.log(this.user.value);
    this.mainService.login(this.user.value).subscribe(res=>{
      console.log(res.body.user);
      localStorage.setItem('username',res.body.user);
      localStorage.setItem('email',res.body.email);
      localStorage.setItem('phone',res.body.phone);
      localStorage.setItem('userType',res.body.userType);
      localStorage.setItem('token',res.body.token);
      this.router.navigate(['/dashboard/product']);
    })
  }

}
