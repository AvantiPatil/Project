import { PatientComponent } from '../Patient/patientApp.Component';
import { SearchComponent} from '../Patient/patientApp.search.component';
import { HomeComponent} from '../Patient/Home.component';


export const PatientRoutes =[
    {path:'', component:HomeComponent},
    {path:'Patient', component:PatientComponent},
    {path:'SearchPatient', component:SearchComponent},

];
   