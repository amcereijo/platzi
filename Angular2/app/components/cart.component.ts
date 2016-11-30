import {Component, OnInit} from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'cart',
  template:
  `
    <div class="cart">
      <h2>Carrito</h2>
      <span>{{details.items}} artículos agregados</span>
      <div *ngFor="let key of keys()" class="details">
        {{courses[key].name}}
        {{courses[key].price | currency: 'USD': true : '1.2-2'}}
        x
        {{courses[key].quantity}}
        <span class="total">
          {{ (courses[key].quantity * courses[key].price) | currency: 'USD' : true : '1.2-2' }}
        </span>
      </div>
      <span class="total">
        {{details.total | currency: 'USD' : true : '1.2-2'}}
      </span>
    </div>
  `
})

export class CartComponent implements OnInit{
  courses: any;
  details: any;

  constructor(private cartService : CartService){

  }

  keys() {
    return Object.keys(this.courses);
  }

  ngOnInit() {
    this.courses = this.cartService.getCourses();
    this.details = this.cartService.getDetail();
  }
}