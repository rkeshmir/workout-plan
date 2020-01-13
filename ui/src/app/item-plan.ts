import SetPlan from "./set-plan";

export default class ItemPlan {
  _id: string;
  name: string;
  period: number;
  sets: SetPlan[];
}
