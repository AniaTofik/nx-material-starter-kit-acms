import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ProductFormComponent } from './product-form.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, CommonModule, MatButtonModule, RouterModule],
  declarations: [ProductFormComponent],
  providers: [],
  exports: [ProductFormComponent]
})
export class ProductFormComponentModule {
}
