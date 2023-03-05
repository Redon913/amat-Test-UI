import { Component, EventEmitter, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PurchaseRequest } from 'src/app/models/purchaseRequest.model';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cart!: { totalAmount: number; cartData: PurchaseRequest[] };

  @Output() cartButtonClick: EventEmitter<any> = new EventEmitter();

  constructor(
    private cartService: CartService,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {
    this.getCart();
  }

  cartButtonClicked() {
    this.cartButtonClick.emit(null);
  }

  deleteFromCart(fruitName: string) {
    this.cartService.removeFruit(fruitName);
    this.getCart();
  }

  deleteOneFromCart(fruitName: string) {
    this.cartService.removeOneFruit(fruitName);
    this.getCart();
  }

  getCart() {
    this.cart = this.cartService.getCart();
  }

  checkOutCart() {
    this.cartService.checkoutCart().subscribe((rs) => {
      if (rs.error) {
        this.errorHandler(rs.error);
      } else {
        this.successHandler(rs);
        this.clearCart();
      }
    });
  }

  clearCart() {
    this.cartService.clearCart();
    this.getCart();
  }

  errorHandler(err: any) {
    if (err.name === 'SecurityError') {
      this.clearCart();
      this.router.navigate(['/handler'], {
        queryParams: { title: err.name, message: err.message },
      });
    } else {
      this._snackBar.open(err.message, 'OK', {
        horizontalPosition: 'end',
        verticalPosition: 'bottom',
        duration: 2000,
      });
    }
  }

  successHandler(scc: any) {
    this._snackBar.open('Your Order has been placed Successfully!!', '', {
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
      duration: 2000,
    });
  }
}
