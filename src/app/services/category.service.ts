import { HttpClient, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) {


  }
  add_category(category: Category) {
    return this.httpClient.post<any>("http://localhost:8080/categories/add", category);


  }
  get_categories() {
    return this.httpClient.get<any>("http://localhost:8080/categories/all");

  }
  getOneCategory(id:any)
  {return this.httpClient.get<any>("http://localhost:8080/categories/one/"+id)}

  delete_category(id:any)
  {
    return this.httpClient.delete<any>("http://localhost:8080/categories/delete/"+id);
  }
 update_category(category:Category)
  {return this.httpClient.patch<any>("http://localhost:8080/categories/update", category)}


  
}
