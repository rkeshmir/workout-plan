import { Component, OnInit } from '@angular/core';
import {PlanService} from "../plan.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

import Plan from "../plan";

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent implements OnInit {

  plans: Plan[] = [];
  planForm = new FormGroup({
    name: new FormControl('', Validators.required),
    default_period: new FormControl('', [Validators.required, Validators.min(0)]),
  });
  constructor(private planService: PlanService) { }

  ngOnInit() {
   this.getPlans();
  }

  addPlan() {
    if (this.planForm.invalid) {
      alert('Please fill all the fields properly!');
      return;
    }
    this.planService.createPlan(this.planForm.value).subscribe( () => {
      this.getPlans();
      this.planForm.reset();
    })
  }

  getPlans() {
    this.planService.getPlans().subscribe( res => this.plans = res);
  }
  update(plan: Plan) {
    this.planService.updatePlan(plan).subscribe();
  }
  remove(plan: Plan) {
    this.planService.deletePlan(plan).subscribe( () => {
      console.log('after delete');
      this.getPlans();
    });
  }

}
