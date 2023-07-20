import { Component } from '@angular/core';
import { products } from '../products';
import { CartService } from '../cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = products;

  constructor(
    private cartService: CartService,
    private snackBar: MatSnackBar
  ) {}

  onNotify() {
    window.alert('You will be notified when the product is on sale');
  }

  addToCart(product) {
    this.cartService.addToCart(product);

    this.snackBar.open('teste', 'ok', {
      duration: 222220,
      verticalPosition: 'top', // Allowed values are  'top' | 'bottom'
      horizontalPosition: 'center', // Allowed values are 'start' | 'center' | 'end' | 'left' | 'right'
    });
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
