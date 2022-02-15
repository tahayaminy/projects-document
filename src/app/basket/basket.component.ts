import { Component, OnInit } from '@angular/core';
import { BasketService } from '../basket.service';
import { product } from '../basket-interface';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent implements OnInit {
  constructor(private basketService: BasketService) {}

  ngOnInit(): void {
    this.getproducts();
  }
  products: product[] = [];
  getproducts(): void {
    this.products = this.basketService.getproducts();
  }
  $(el: string): any {
    return document.getElementById(el);
  }
  productSlcts: product[] = [];

  add(el: any, number: number, state: boolean) {
    if (!state) {
      this.productSlcts.push(this.products[number - 1]);
      this.$(el).removeAttribute('click');
      this.products[number - 1].select = true;
    }
  }

  rm(id: number) {
    this.products[id - 1].select = false;
    const index = this.productSlcts.findIndex((object) => {
      return object.id === id;
    });
    this.productSlcts.splice(index,1);
    
  }
}
