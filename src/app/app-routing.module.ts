import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { authGuard } from './gaurd/auth.guard';

const routes: Routes = [
  {path:"",pathMatch:"full",component:LoginComponent},  
  {path:"home",component:HomeComponent,canActivate:[authGuard]},
  {path:"login",component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
