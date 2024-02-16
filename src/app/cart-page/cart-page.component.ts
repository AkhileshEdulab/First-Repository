import { Component } from '@angular/core';
import { CartService } from '../service/cart.service';
import { CartItem } from '../shared/model/cartItem';
import { Cart } from '../shared/model/cart';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
   cart!: Cart;
   cartItem:any;
    constructor(private cartService:CartService){
    this.setCart();
  }
  ngOnInit():void{

  }
  setCart(){
    this.cart = this. cartService.getCart();
  }
removeFromCart(cartItem:CartItem){
  this.cartService.removeFromCart(cartItem.food.id);
  this.setCart();//instance Load Data
}
changeQuantity(cartItem:CartItem,quantityInString:string){
  let quantity = parseInt(quantityInString);
  this.cartService.changeQuantity(cartItem.food.id,quantity);
  this.setCart();
}
}
