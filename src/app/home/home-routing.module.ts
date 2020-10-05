import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const homeRoutes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
