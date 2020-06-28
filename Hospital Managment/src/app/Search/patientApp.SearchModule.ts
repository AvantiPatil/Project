import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { PatientSearchRoutes } from '../Routes/patientApp.SearchRoutes';
import { SearchComponent} from './patientApp.searchComponent';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    
    SearchComponent,
    
    
  ],
  imports: [
   
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(PatientSearchRoutes),
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [SearchComponent]
})
export class SearchModule {
  
 }
