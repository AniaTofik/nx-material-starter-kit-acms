import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ProductComponent} from './components/product/product.component';
import {ProductFormComponent} from './components/product-form/product-form.component';
import {ProductServiceModule} from './services/product.service-module';
import {ProductFormComponentModule} from './components/product-form/product-form.component-module';

@NgModule({
  imports: [RouterModule.forRoot([ {
    path: 'add-product',
    component: ProductFormComponent
  }, {
    path: 'products',
    component: ProductComponent
  }]), ProductServiceModule, ProductFormComponentModule],
  providers: [],
  declarations: [],
  exports: []
})
export class AppRoutingModule {
}
