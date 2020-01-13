import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import Plan from "../../plan";
import ItemPlan from "../../item-plan";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {

  @Input() plan: Plan;
  @Output() onUpdate = new EventEmitter<Plan>();
  @Output() onRemove = new EventEmitter<Plan>();
  itemForm: FormGroup;
  constructor() { }

  ngOnInit() {
    if(!this.plan.items)
      this.plan.items = [];
    this.itemForm = new FormGroup({
      name: new FormControl('', Validators.required),
      period: new FormControl(this.plan.default_period, Validators.required),
    })
  }

  update() {
    console.log('plan - update', this.plan);
    this.onUpdate.emit(this.plan);
  }
  remove() {
    this.onRemove.emit(this.plan);
  }
  removeItem(item: ItemPlan) {
    this.plan.items = this.plan.items.filter( i => i._id !== item._id);
    this.update();
  }
  addItem() {
    if(this.itemForm.invalid) {
      alert('please fill all the fields properly');
      return;
    }
    this.plan.items = this.plan.items.concat([this.itemForm.value]);
    console.log('plan - addItem', this.plan, this.itemForm.value);
    this.update();
  }

  updateItem(item) {
    this.plan.items = this.plan.items.map( i => {
      if(item._id === i._id)
        return item;
      return i;
    });
    this.update();
  }

}
