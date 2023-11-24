import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestauranteComponent } from './restaurante.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RestauranteComponent],
  exports: [RestauranteComponent]
})
export class RestauranteModule {

 }
