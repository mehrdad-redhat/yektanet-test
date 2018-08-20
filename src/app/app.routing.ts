import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home.component/home.component';


const appRoutes: Routes = [
  {path:'',component:HomeComponent},


  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];

export const AppRouting = RouterModule.forRoot(appRoutes);
