import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { PatientModel, patientProblem} from './patientApp.Model'

@Component({
  selector: 'app-root',
  templateUrl: './patientApp.component.html',
  styleUrls: ['./patientApp.Patient.css']
  
})
export class PatientComponent {
  
  Patientobj:PatientModel= null;
  patientProblem:patientProblem=new patientProblem();
  Patientobjs:Array<PatientModel> = new Array<PatientModel>();
  
      constructor(private Http:HttpClient){
      this.Patientobj=new PatientModel();
      }
      AddProblem(){
        this.Patientobj.patientProblems.push(this.patientProblem);
        this.patientProblem= new patientProblem();
    }
      
      Submit(){

        let patientDetail={
          id:this.Patientobj.id,
          name: this.Patientobj.name,
          problemDescription:this.Patientobj.patientProblems
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

