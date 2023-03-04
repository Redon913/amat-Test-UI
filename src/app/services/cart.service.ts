import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PurchaseRequest } from '../models/purchaseRequest.model';
import { DataService } from '../providers/data.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private fruitCart:PurchaseRequest[] = [];

  
  

  constructor(private dataService: DataService) { }

  checkoutCart(){

    const req: any = {};
    this.fruitCart.map(rs => {
      req[rs.name] = rs.quantity;
    })
    
    return this.dataService.postData(environment.Url + 'checkout', req);
  }

  addToCart(fruitName: string, quant: number, price: number){
    let exists:boolean = false;
    this.fruitCart.map(d => {
      if(d.name === fruitName){
        exists = true;
        d.quantity += quant;
      }
    })
    if(!exists)
      this.fruitCart.push({name: fruitName, quantity: quant, price: price})
  }

  removeFruit(fruitName : string) {
    this.fruitCart = this.fruitCart.filter(data => data.name !== fruitName);
  }

  clearCart(){
    this.fruitCart = [];
  }

  getCart(){
    return this.fruitCart;
  }
}
