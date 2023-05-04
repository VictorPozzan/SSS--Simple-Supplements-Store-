import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart.service';
import { BlogService } from './blog.service';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HeaderNav } from './header-nav/header-nav.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      [
        { path: '', component: ProductListComponent },
        {
          path: 'products/:productId',
          component: ProductDetailsComponent,
        },
        {
          path: 'cart',
          component: CartComponent,
        },
        {
          path: 'aboutUs',
          component: AboutUsComponent,
        },
        {
          path: 'blog',
          component: BlogComponent,
        },
      ],
      { anchorScrolling: 'enabled' }
    ),
  ],
  declarations: [
    AboutUsComponent,
    AppComponent,
    BlogComponent,
    CartComponent,
    HeaderNav,
    ProductAlertsComponent,
    ProductListComponent,
    ProductDetailsComponent,
    TopBarComponent,
  ],
  bootstrap: [AppComponent],
  providers: [CartService, BlogService],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
