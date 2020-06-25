import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { PatientModel} from './patientApp.Model'

@Component({
  selector: 'app-root',
  templateUrl: './patientApp.component.html',
  
})
export class PatientComponent {
  
  Patientobj:PatientModel= null;
  Patientobjs:Array<PatientModel> = new Array<PatientModel>();
  
      constructor(private Http:HttpClient){
      this.Patientobj=new PatientModel();
      }
      
      Submit(){

        let patientDetail={
          id:this.Patientobj.id,
          name: this.Patientobj.name,
          problemDescription:this.Patientobj.problemDescription
        }
        // var obj:any ={};
        // obj.id=this.Patientobj.id;
        // obj.name=this.Patientobj.name;
        // obj.problemDescription=this.Patientobj.problemDescription;
        
        this.Http.post("https://localhost:44316/api/PatientAPI" , patientDetail)
        .subscribe(res => this.success(res),
        res => this.Error(res));
      
      }
      success(res){
        this.Patientobjs= res;
        this.Patientobj = new PatientModel();
      }
      Error(res){
        
    alert(res);
      }
 
}

