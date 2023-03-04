import { Component, OnInit } from '@angular/core';
import { Fruit } from 'src/app/models/fruit.model';
import { FruitService } from 'src/app/services/fruit.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  allFruits:Fruit[] = [];

  constructor(private fruitService: FruitService) {

  }

  ngOnInit(){
    this.fruitService.getAllFruits().subscribe(data => {

      let fruitName = Object.keys(data);
      fruitName.forEach(fname => {
        this.allFruits.push({Name: fname, ...data[fname]});
      });
      
    })
  }
}
