import { Injectable } from '@angular/core';
import { products } from './mock-basket';
import { product } from './basket-interface';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  constructor() { }
  getproducts():product[]{
    return products;
  }
}
