import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import ItemPlan from "../../item-plan";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import SetPlan from "../../set-plan";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item: ItemPlan;
  @Output() onUpdate = new EventEmitter<ItemPlan>();
  setFrom = new FormGroup({
    number: new FormControl('', [Validators.required, Validators.min(1)])
  });
  constructor() { }

  ngOnInit() {
  }

  update() {
    this.onUpdate.emit(this.item);
  }
  addSet() {
    this.item.sets.push(this.setFrom.value);
    this.update();
  }
  removeSet(set: SetPlan) {
    this.item.sets = this.item.sets.filter(s => s !== set);
    this.update();
  }

}
