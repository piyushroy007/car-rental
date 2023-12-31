import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { authGuard } from './gaurd/auth.guard';
import { RegisterComponent } from './components/auth/register/register.component';

const routes: Routes = [
  {path:"",pathMatch:"full",redirectTo:"login"},  
  {path:"home",component:HomeComponent,canActivate:[authGuard]},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"cars",loadChildren: ()=> import('./components/cars/cars.module').then(m=>m.CarsModule)},
  {path:"*",component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
