import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { PatientHomeRoutes } from '../Routes/HomeRoutes';
import { CommonModule } from '@angular/common';
import { MasterPageComponent} from './app.Masterpagecomponent';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './Home.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './app.Logincomponent';
import { LoginModel } from './app.LoginModel';
import { SecurityLogic } from '../Utility/Utility.Authguard';
import { JWTInterceptor } from '../Utility/Utility.Interceptor';



@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    MasterPageComponent,
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(PatientHomeRoutes),
   
   
  ],
  providers: [LoginModel, SecurityLogic,
  {provide:HTTP_INTERCEPTORS, useClass:JWTInterceptor,multi:true}],
  bootstrap: [MasterPageComponent]
})
export class HomeModule {
  
 }
