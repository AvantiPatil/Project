
import { HomeComponent} from '../Home/Home.component';
import { LoginComponent} from '../Home/app.Logincomponent';




export const PatientHomeRoutes =[
    {path:'', component:HomeComponent},
    
    {path:'Home', component:HomeComponent},
    {path:'Login', component:LoginComponent},
    {path:'Patient',loadChildren:'../Patient/patientApp.module#PatientModule'},
    {path:'Search', loadChildren: '../Search/patientApp.SearchModule#SearchModule'},
];
   