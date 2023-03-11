import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../components/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];
  constructor(private http: HttpClient) { }

  /**
   * Agragar un producto
   * @param product 
   */
  addToCart(product: Product) {
    this.items.push(product);
  }

  /**
   * Obtener los productos
   * @returns 
   */
  getItems() {
    return this.items;
  }

  /**
   * Limpiar los productos
   * @returns 
   */
  clearCart() {
    this.items = [];
    return this.items;
  }

  /**
   * recuperar precios
   * @returns 
   */
  getShippingPrices() {
    return this.http.get<{ type: string, price: number }[]>('/assets/data/pruebalo/shipping.json');
  }

}
