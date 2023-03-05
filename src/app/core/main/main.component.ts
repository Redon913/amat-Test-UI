import { Component, OnInit } from '@angular/core';
import { Fruit } from 'src/app/models/fruit.model';
import { FruitService } from 'src/app/services/fruit.service';
import { MatDialog } from '@angular/material/dialog';
import { AddCartDialogComponent } from '../add-cart-dialog/add-cart-dialog.component';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  allFruits: Fruit[] = [];

  constructor(
    public dialog: MatDialog,
    private fruitService: FruitService,
    private cartService: CartService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.fruitService.getAllFruits().subscribe((data) => {
      if (data.error) {
        this.router.navigate(['/handler'], {
          queryParams: { title: data.error.name, message: data.error.message },
        });
      } else {
        let fruitName = Object.keys(data);
        fruitName.forEach((fname) => {
          this.allFruits.push({ name: fname, ...data[fname] });
        });
      }
    });
  }

  addToCart(fruit: string, quantity: string, price: number) {
    this.cartService.addToCart(fruit, parseInt(quantity), price);
    this._snackBar.open(
      `${quantity} ${fruit} Successfully Added To The Cart!!`,
      '',
      {
        horizontalPosition: 'end',
        verticalPosition: 'bottom',
        duration: 2000,
      }
    );
  }

  addCart(fruit: Fruit) {
    const dialogref = this.dialog.open(AddCartDialogComponent, {
      data: fruit,
    });

    dialogref.afterClosed().subscribe((result) => {
      if (result) {
        this._snackBar.open(
          `${result} ${fruit.name} Successfully Added To The Cart!!`,
          '',
          {
            horizontalPosition: 'end',
            verticalPosition: 'bottom',
            duration: 2000,
          }
        );
      }
    });
  }
}
