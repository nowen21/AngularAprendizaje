import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../servicios/cart.service';

import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  constructor(private route: ActivatedRoute, private cartService: CartService) { }
  ngOnInit(): void {
    // Primero obtiene el id del producto de la ruta actual.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Encuentra el producto que corresponde con el id proporcionado en la ruta.
    this.product = products.find(product => product.id === productIdFromRoute);
  }

  /**
   * Agregar el producto al carro
   * @param product 
   */
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Su producto ha sido agregado al carro!');
  }
}
