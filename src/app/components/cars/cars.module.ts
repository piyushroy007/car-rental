import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsRoutingModule } from './cars-routing.module';
import { CarComponent } from './car/car.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { CarfilterComponent } from './carfilter/carfilter.component';

console.log("cars module is loaded");
@NgModule({
  declarations: [
    CarComponent,
    CarDetailsComponent,
    CarfilterComponent
  ],
  imports: [
    CommonModule,
    CarsRoutingModule
  ],
  exports: [
    CarComponent,
    CarDetailsComponent,
    CarfilterComponent
  ]
})
export class CarsModule { }
