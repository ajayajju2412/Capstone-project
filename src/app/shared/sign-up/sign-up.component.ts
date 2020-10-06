import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/user/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  user = new User();

  //constructor(private authService: AuthService, private router: Router) { }
  constructor(){}

  ngOnInit(): void {
  }

  signupUser(){
    //authservice here and pass user
    // this.authService.signup(this.user).subscribe(result=>{
    //    //result=success->
    //   console.log(result);
    //   //for navigation,we need to inject dependency of Router 
      
    // },err=>{
    //   //result=fail->display error
    //   console.log(err);
    //   alert(JSON.stringify(err));
    // });

  }


}
