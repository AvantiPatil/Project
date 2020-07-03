import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { LoginModel } from './app.LoginModel';


@Component({
  selector: 'app-root',
  templateUrl: './app.Logincomponent.html',
  
  
})
export class LoginComponent {
  Loginobj:LoginModel= new LoginModel();

  constructor(public http:HttpClient){

 }
  SignIn()
  {
    //call the mvc core and get the token

    this.http.post("https://localhost:44316/api/security", this.Loginobj)
      .subscribe(res=>this.success(res), res=>this.error(res));
  }
  success(res){
     alert(res.token); 
  }
  error(res){

  }
 
 
}

