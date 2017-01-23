import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {Product} from "../Models/Product";

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input()
  productObject:Product;
  quantity:number = 0;
  @Output()
  eventAdd = new EventEmitter();
  @Output()
  eventRemove = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  onAddClicked() {
    this.quantity++;
    let moneyToAdd: number = this.productObject.price;
    for (let i = 0; i < moneyToAdd; i++) {
      this.eventAdd.emit();
    }
  }

  onRemoveClicked() {
    if(this.quantity > 0) {
      this.quantity--;
      let moneyToReduce: number = this.productObject.price;
      // for (let i = 0; i < moneyToReduce; i++) {
      //   this.eventRemove.emit();
      // }
      this.eventRemove.emit(moneyToReduce);
    }
  }


}
