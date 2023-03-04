import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DataService } from '../providers/data.service';


@Injectable({
  providedIn: 'root'
})
export class FruitService {

  constructor(private dataService : DataService) { }

  getAllFruits(){
    return this.dataService.getData( environment.Url + 'getAllFruits');
  }

  getFruitByName(fruitName: string){
    return this.dataService.getData(environment.Url + 'getFruit/' + fruitName);
  }
  
}
