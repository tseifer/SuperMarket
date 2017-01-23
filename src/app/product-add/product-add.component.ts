import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Product} from "../Models/Product";

@Component({
  selector: 'product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  @Output()
  addProductEvent = new EventEmitter();
  product:Product;
  constructor() { }

  ngOnInit() {
    this.product = new Product('',0);
  }

  addProduct() {
    this.addProductEvent.emit(this.product);
    this.product = new Product('',0);
  }
}
