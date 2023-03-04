import { Component, Inject, Input} from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Fruit } from 'src/app/models/fruit.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-add-cart-dialog',
  templateUrl: './add-cart-dialog.component.html',
  styleUrls: ['./add-cart-dialog.component.css']
})
export class AddCartDialogComponent {

  @Input() quantity: number = 1;

  constructor(
    @Inject(MAT_DIALOG_DATA) public fruit: Fruit,
    private cartService : CartService
    ){}

    addToCart(){

    }

}
