import { NgModule } from '@angular/core';
import { ProductPage } from './product.page';
import {ProductComponentModule} from "../components/product/product.component-module";
import {ProductServiceModule} from "../services/product.service-module";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'products'
      },
    ]),
    ProductComponentModule, ProductServiceModule],
  declarations: [ProductPage],
  providers: [],
  exports: [ProductPage]
})
export class ProductPageModule {
}
