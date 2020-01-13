import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlansComponent } from './plans/plans.component';
import { PlanComponent } from './plans/plan/plan.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ItemComponent } from './plans/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    PlansComponent,
    PlanComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
