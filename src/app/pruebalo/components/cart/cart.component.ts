import { Component } from '@angular/core';
import { CartService } from '../../servicios/cart.service';
import { FormBuilder } from '@angular/forms'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) { }

  /**
   * Este método permite a los usuarios enviar su nombre y dirección. Además, este método utiliza el método clearCart()  de 
   * CartService restablecer el formulario y borrar el carrito.
   */
  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}

//  