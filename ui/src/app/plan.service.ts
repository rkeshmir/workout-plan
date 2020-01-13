import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import Plan from "./plan";

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  baseUrl = '/api/plan';
  constructor(private http: HttpClient) { }

  getPlans() {
    return this.http.get<Plan[]>(this.baseUrl);
  }

  createPlan(plan: Plan) {
    return this.http.post(this.baseUrl, plan);
  }

  updatePlan(plan: Plan) {
    if(!plan._id) {
      throw 'can not update a plan without database id';
    }
    return this.http.put(`${this.baseUrl}/${plan._id}`, plan);
  }

  deletePlan(plan: Plan) {
    return this.http.delete(`${this.baseUrl}/${plan._id}`);
  }
}
