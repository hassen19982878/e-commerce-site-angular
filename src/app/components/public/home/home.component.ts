import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  list_categories = []
  products = [];
  allProducts = []
  constructor(private catserv: CategoryService, private prodserv: ProductService) { }

  ngOnInit(): void {
    this.catserv.get_categories().subscribe(
      res => { this.list_categories = res },
      err => console.log(err)

    )
    this.prodserv.get_products().subscribe
    (
      res=>{console.log(res)
        this.products=res;
        this.allProducts=res},
      err=>console.log(err)
    )
  }


  filterByCategory(id: Number | undefined) {
    console.log(id)
    id == 0 ? this.products = this.allProducts : this.products = this.allProducts.filter((p) => p.category.id == id);
  }


}
