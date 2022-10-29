import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { ProductComponent } from './product.component';

@NgModule({
  imports: [MatListModule, CommonModule, MatChipsModule],
  declarations: [ProductComponent],
  providers: [],
  exports: [ProductComponent]
})
export class ProductComponentModule {
}
