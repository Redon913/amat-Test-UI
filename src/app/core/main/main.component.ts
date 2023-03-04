import { Component, OnInit } from '@angular/core';
import { Fruit } from 'src/app/models/fruit.model';
import { FruitService } from 'src/app/services/fruit.service';
import {MatDialog} from '@angular/material/dialog';
import { AddCartDialogComponent } from '../add-cart-dialog/add-cart-dialog.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  allFruits:Fruit[] = [];

  constructor(
    public dialog: MatDialog,
    private fruitService: FruitService
  ) {}

  ngOnInit(){
    this.fruitService.getAllFruits().subscribe(data => {

      let fruitName = Object.keys(data);
      fruitName.forEach(fname => {
        this.allFruits.push({name: fname, ...data[fname]});
      });
      
    })
  }

  addCart(fruit:Fruit){
    const dialogRef = this.dialog.open(AddCartDialogComponent, {
      data: fruit});

      dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}