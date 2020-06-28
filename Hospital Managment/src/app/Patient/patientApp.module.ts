import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { PatientRoutes } from '../Routes/patientRoutes';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { PatientComponent } from './patientApp.component';


@NgModule({
  declarations: [
   PatientComponent
    
    
  ],
  imports: [
   
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(PatientRoutes),
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [PatientComponent]
})
export class PatientModule {
  
 }
