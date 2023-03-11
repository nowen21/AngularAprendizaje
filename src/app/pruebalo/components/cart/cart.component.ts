import { Component } from '@angular/core';
import { CartService } from '../../servicios/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(
    private cartService: CartService
  ) { }
}
