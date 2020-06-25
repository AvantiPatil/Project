import { NgForm,
          FormGroup,
             FormControl,
                 Validators,
            FormBuilder} from '@angular/forms'

export class PatientModel{
    id:number=0;
    name:string = "";
    problemDescription:string = "";
   // step 1 create object of formgroup
   formPatientGroup:FormGroup = null;

   constructor(){
       //tree structure
       var _builder = new FormBuilder();
       //use the builder
       this.formPatientGroup = _builder.group({}); 
       //add vlidation to formGroup
        this.formPatientGroup.addControl("namecontrol",
            new FormControl('',Validators.required));

        this.formPatientGroup.addControl("problemdesccontrol",
            new FormControl('',Validators.required));
   }
}
