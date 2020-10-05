import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in-modal',
  templateUrl: './sign-in-modal.component.html',
  styleUrls: ['./sign-in-modal.component.scss']
})
export class SignInModalComponent implements OnInit {

  displaySignIn: boolean = true;
  displaySignUp: boolean;
  
  signin(){
    this.displaySignIn = true;
    this.displaySignUp = false;
  }
  signup(){
    this.displaySignUp = true;
    this.displaySignIn = false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
