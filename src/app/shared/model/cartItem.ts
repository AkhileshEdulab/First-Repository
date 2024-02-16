import { Foods } from "./food";

export class CartItem{
    constructor(food:Foods){
        this.food=food;
        
    }
food:Foods;
quentity:number=1;
price():number{
  return this.food.price*this.quentity
}
}