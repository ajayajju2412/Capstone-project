import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/user/user';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  usernameVar: String;
  passwordVar: String;

  //constructor(private authService: AuthService,private router: Router) { }
  constructor(){}

  ngOnInit(): void {
  }

  //on submission,username and password are passed as parameters i.e., as credentials
  onSubmit(credentials: NgForm){
    // console.log(credentials);
    // //showing credentials are same as username and password
    // console.log(this.usernameVar + ' ' + this.passwordVar);

    // //after submission->further action
    // //call service method to communicate with API,pass parameters in it.For getting service method, inject service as dependency in the constructor
    // this.authService.signin(credentials).subscribe(result=>{
    //   alert('login successful');
    //   //if success->response which is json object->from which,jwt token is stored in local storage
    //   //->user role->//Admin -> dashboard
    //   //customer -> 
    //     //for now
    //     //console.log(response);
    //     //console.log(response.jwtToken);
    //     let user = result as User;
    //     console.log(user);
    //     this.authService.saveUser(user);
    //     //localStorage.setItem('token',user.jwtToken);
        
                             
    // },err=>{
    //   //if fail->alert
    //   alert(err);
    //   //for now
    //   console.log(err);
    // });
  }

}
