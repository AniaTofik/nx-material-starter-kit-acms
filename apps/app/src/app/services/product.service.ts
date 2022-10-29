import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from '../models/product.model';

@Injectable()
export class ProductService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<ProductModel[]> {
    return this._httpClient.get<ProductModel[]>('https://fakestoreapi.com/products');
  }

  create(product: ProductModel): Observable<ProductModel> {
    return this._httpClient.post<ProductModel>('https://fakestoreapi.com/products', product);
  }

  delete(id: string): Observable<ProductModel> {
    return this._httpClient.delete<ProductModel>('https://fakestoreapi.com/products/' + id);
  }

  getOne(id: string): Observable<ProductModel> {
    return this._httpClient.get<ProductModel>('https://fakestoreapi.com/products/' +id );
  }
}
