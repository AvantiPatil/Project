
import { HomeComponent} from '../Home/Home.component';
import { LoginComponent} from '../Home/app.Logincomponent';
import { SecurityLogic } from '../Utility/Utility.Authguard';




export const PatientHomeRoutes =[
    {path:'', component:HomeComponent , canActivate : [SecurityLogic]},
    
    {path:'Home', component:HomeComponent ,canActivate : [SecurityLogic] },
    {path:'Login', component:LoginComponent},
    {path:'Patient',loadChildren:'../Patient/patientApp.module#PatientModule' , 
    canActivate : [SecurityLogic]},
    {path:'Search', loadChildren: '../Search/patientApp.SearchModule#SearchModule' ,
    canActivate : [SecurityLogic]},
];
   