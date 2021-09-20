import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {
  list_categories: any[] = [];
  allCategories: any[] = [];

  constructor(private categoryservice: CategoryService) { }

  ngOnInit(): void {

    this.categoryservice.get_categories().subscribe(
      res => { this.list_categories=res; },
      err => { console.log(err); }
    )
  }

  deleteCategory(category:any)
  {
    let index = this.list_categories.indexOf(category);
    this.list_categories.splice(index, 1);

    this.categoryservice.delete_category(category.id).subscribe(
      res => { console.log(res)},
      err => { console.log(err); }
    )
  }
  filterByName(name: string) {    
    this.list_categories = this.allCategories.filter( (c) => 
c.name?.includes(name)
);
  }

}
