import { Injectable } from '@angular/core';
import { Product } from '../components/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];
  constructor() { }
}
