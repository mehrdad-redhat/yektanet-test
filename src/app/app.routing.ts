import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home.component/home.component';
import {SinglePageComponent} from './single-page.component/single-page.component';


const appRoutes: Routes = [
  {path:'',component:HomeComponent},
  {path:':ID',component:SinglePageComponent},




  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];

export const AppRouting = RouterModule.forRoot(appRoutes);
