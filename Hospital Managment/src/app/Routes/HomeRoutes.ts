
import { HomeComponent} from '../Home/Home.component';



export const PatientHomeRoutes =[
    {path:'', component:HomeComponent},
    
    {path:'Home', component:HomeComponent},
    {path:'Patient',loadChildren:'../Patient/patientApp.module#PatientModule'},
    {path:'Search', loadChildren: '../Search/patientApp.SearchModule#SearchModule'},
];
   