import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { PatientRoutes } from '../Routing/app.PatientRoutes';
import { SearchComponent} from './patientApp.search.component';
import { CommonModule } from '@angular/common';
import { PatientComponent } from './patientApp.Component';
import { MasterPageComponent} from './app.Masterpagecomponent';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './Home.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    PatientComponent,
    SearchComponent,
    MasterPageComponent,HomeComponent
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(PatientRoutes),
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [MasterPageComponent]
})
export class PatientModule {
  
 }
