import { Component } from '@angular/core';
import { PurchaseRequest } from 'src/app/models/purchaseRequest.model';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  cart!: PurchaseRequest[];

  totalAmount: number = 40;

  constructor(private cartService: CartService){
    this.getCart()
  }

  deleteFromCart(fruitName: string){
    this.cartService.removeFruit(fruitName);
    this.getCart()
  }

  getCart(){
    this.cart = this.cartService.getCart();
  }
}
