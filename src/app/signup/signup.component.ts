import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MainServiceService } from '../main-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private mainService : MainServiceService,
              private router: Router) { }
  user:FormGroup;

  ngOnInit(): void {
    this.user = new FormGroup({
      username:new FormControl(),
      password:new FormControl(),
      email:new FormControl(),
      phone:new FormControl(),
      userType:new FormControl()
    })
  }

  signup()
  {
    console.log(this.user.value);
    this.mainService.signup(this.user.value).subscribe(res=>{
      console.log(res.body);
      this.router.navigate(['/login']);
    })
  }

}
