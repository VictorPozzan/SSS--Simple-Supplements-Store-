import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CartService {
  items = [];
  total = 0;

  addToCart(product) {
    this.items.push(product);
    this.total = this.total + product.price;
  }

  getItems() {
    return this.items;
  }

  getTotal() {
    return this.total;
  }

  clearCart() {
    this.total = 0;
    this.items = [];
    return this.items;
  }
}
