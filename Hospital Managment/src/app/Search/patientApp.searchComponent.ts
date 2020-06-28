import { Component } from '@angular/core';
import { PatientModel } from '../Patient/patientApp.Model';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root-search',
    templateUrl: './patientApp.search.component.html',
    
  })
  export class SearchComponent {
    patientName:string="";
    patientModels:Array<PatientModel> = new Array<PatientModel>();
    constructor(public http:HttpClient){

    }
   
    search()
    {

      this.http.get("https://localhost:44316/api/PatientAPI?patientName=" + this.patientName)
        .subscribe(res=>this.success(res), res=>this.error(res));
    }
    success(res){
        this.patientModels=res;
    }
    error(res){

    }
  }    