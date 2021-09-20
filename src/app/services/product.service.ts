import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  
  add_product(product: Product) {
    return this.http.post<any>("http://localhost:8080/products/add", product);


  }
  get_products() {
    return this.http.get<any>("http://localhost:8080/products/all");

  }
  getOneProduct(id:any)
  {return this.http.get<any>("http://localhost:8080/products/one/"+id)}

  delete_product(id:any)
  {
    return this.http.delete<any>("http://localhost:8080/products/delete/"+id);
  }
 update_product(product:Product)
  {return this.http.patch<any>("http://localhost:8080/products/update", product);}
}