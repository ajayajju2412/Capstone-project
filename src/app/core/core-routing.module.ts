import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home/home.component';


const coreRoutes: Routes = [
  {path: 'products',component: HomeComponent}
]; 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(coreRoutes)
  ],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
