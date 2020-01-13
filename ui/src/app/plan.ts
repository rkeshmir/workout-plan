import ItemPlan from "./item-plan";

export default class Plan {
  _id: string;
  name: string;
  default_period: number;
  items: ItemPlan[]
}
