import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { LoginModel } from './app.LoginModel';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.Logincomponent.html',
  
  
})
export class LoginComponent {
  //Loginobj:LoginModel= new LoginModel();

  constructor(public http:HttpClient ,
     public Loginobj:LoginModel,
    public routing:Router){
   
 }
  SignIn()
  {
    //call the mvc core and get the token

    this.http.post("https://localhost:44316/api/security", this.Loginobj)
      .subscribe(res=>this.success(res), res=>this.error(res));
  }
  success(res){
     this.Loginobj.token = res.token;
     this.routing.navigate(["Home"]);
  }
  error(res){

  }
 
 
}

