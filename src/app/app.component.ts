import { Component } from '@angular/core';
import {Product} from "./Models/Product";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Welcome to our Supermarket';
  productsList: Product[];
  totalCart:number = 0;

  constructor() {
    this.productsList = [
      new Product('Apple', 4),
      new Product('Banana', 7),
      new Product('Melon', 20),
      new Product('Rice', 15),
      new Product('Milk', 12),
      new Product('Camumber', 30)

    ];
  }
  addOneShekel() {
    this.totalCart++;
  }
  reduceShekels(money) {
    this.totalCart-=money;
  }

  addProduct(prod) {
    this.productsList.push(prod);
  }


}
