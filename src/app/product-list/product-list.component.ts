import { Component } from '@angular/core';
import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = products;

  constructor(private cartService: CartService) {}

  share() {
    window.alert('O produto foi compartilhado!!');
  }

  onNotify() {
    window.alert('Você vai ser notificado quando o produto estiver a venda');
  }

  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Item add');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
