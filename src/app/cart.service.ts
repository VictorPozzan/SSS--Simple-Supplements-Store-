import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CartService {
  items = [];
  total = 0;

  constructor(private http: HttpClient) {}

  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      "/assets/shipping.json"
    );
  }

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
