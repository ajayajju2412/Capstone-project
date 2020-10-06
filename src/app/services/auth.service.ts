import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../user/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  saveUser(user: User) {
    //saving user and token in local storage->application
    localStorage.setItem('token',user.jwtToken);
    localStorage.setItem('user',JSON.stringify(user));
  }

  //this method is used in customInterceptor 
  getToken(){
    //getting saved token from local strorage
    localStorage.getItem('token');
  }
  
  constructor(private httpClient: HttpClient) { } 

  signin(credentials){
    //url for calling authController that we used in springboot project
    //get this from API documentation
    let url = 'http://localhost:8080/auth/login';

    //call signin API(back end API)
    //for calling API,we need httpClient object of HttpClient class.so inject the dependency here
    //with httpClient obj,all http methods are available eg:get,post,put
    //to use get or post,go to authController.java class and look at requestMapping over signin method
    //parameters of post() are url and body of LoginDTO.java which contains username and password
    //Now,API gives a response.This response is returned to calling method(signin) which is used in onSubmit
    return this.httpClient.post(url,credentials);
  }

  signup(user){
    //calling signup API
    let url= 'http://localhost:8080/auth/register';
    //url ->customerDTO in SB project
    return this.httpClient.post(url,user);
    
    
  }
}
