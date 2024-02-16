import { Component, OnInit} from '@angular/core';
import { Foods } from '../shared/model/food';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../service/food/food.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent implements OnInit{
food!:Foods;
constructor(private activatedRoute:ActivatedRoute ,
  private foodService:FoodService, private cartService:CartService,
  private router:Router){
  activatedRoute.params.subscribe((params)=>{
    if(params['id'])
    this.food = foodService.getFoodById(params['id'])
  })
}
ngOnInit():void{

}
addToCart(){
  this.cartService.addToCart(this.food);
  this.router.navigateByUrl('/cart-page')
}
}
