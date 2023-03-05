import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PurchaseRequest } from '../models/purchaseRequest.model';
import { DataService } from '../providers/data.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private fruitCart: { totalAmount: number; cartData: PurchaseRequest[] } = {
    totalAmount: 0,
    cartData: [],
  };

  constructor(private dataService: DataService) {}

  checkoutCart() {
    const req: any = {};
    this.fruitCart.cartData.map((rs) => {
      req[rs.name] = rs.quantity;
    });

    return this.dataService.postData(environment.Url + 'checkout', req);
  }

  addToCart(fruitName: string, quant: number, price: number) {
    let exists: boolean = false;
    this.fruitCart.totalAmount += price * quant;
    this.fruitCart.cartData.map((d) => {
      if (d.name === fruitName) {
        exists = true;
        d.quantity += quant;
      }
    });
    if (!exists) {
      this.fruitCart.cartData.push({
        name: fruitName,
        quantity: quant,
        price: price,
      });
    }
  }

  removeFruit(fruitName: string) {
    this.fruitCart.cartData = this.fruitCart.cartData.filter((data) => {
      if (data.name === fruitName) {
        this.fruitCart.totalAmount -= data.quantity * data.price;
      }
      return data.name !== fruitName;
    });
  }

  removeOneFruit(fruitName: string) {
    let index = this.fruitCart.cartData.findIndex(
      (rs) => rs.name === fruitName
    );

    if (this.fruitCart.cartData[index].quantity > 1) {
      this.fruitCart.cartData[index].quantity -= 1;
      this.fruitCart.totalAmount -= this.fruitCart.cartData[index].price;
    } else {
      this.removeFruit(fruitName);
    }
  }

  clearCart() {
    this.fruitCart.totalAmount = 0;
    this.fruitCart.cartData = [];
  }

  getCart() {
    return this.fruitCart;
  }
}
