import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ProductComponent} from './components/product/product.component';
import {ProductFormComponent} from './components/product-form/product-form.component';
import {ProductComponentModule} from './components/product/product.component-module';
import {ProductServiceModule} from './services/product.service-module';
import {ProductFormComponentModule} from './components/product-form/product-form.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{path: 'products', component: ProductComponent}, {
    path: 'add-product',
    component: ProductFormComponent
  }]), ProductComponentModule, ProductServiceModule, ProductFormComponentModule],
  providers: [],
  declarations: [],
  exports: []
})
export class AppRoutingModule {
}
