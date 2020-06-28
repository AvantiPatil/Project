import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { PatientHomeRoutes } from '../Routes/HomeRoutes';
import { CommonModule } from '@angular/common';
import { MasterPageComponent} from './app.Masterpagecomponent';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './Home.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    HomeComponent,
    MasterPageComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(PatientHomeRoutes),
   
   
  ],
  providers: [],
  bootstrap: [MasterPageComponent]
})
export class HomeModule {
  
 }
