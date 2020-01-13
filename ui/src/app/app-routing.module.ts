import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PlansComponent} from "./plans/plans.component";


const routes: Routes = [
  {
    component: PlansComponent,
    path: 'plans'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
