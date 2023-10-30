import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './car/car.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { CarfilterComponent } from './carfilter/carfilter.component';

const routes: Routes = [
  {path:"",component:CarComponent},
  {path:"carDetails",component:CarDetailsComponent},
  {path:"carFilter",component:CarfilterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule { }
