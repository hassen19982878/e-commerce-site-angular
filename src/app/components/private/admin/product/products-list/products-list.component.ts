import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
productsList=[];
  constructor(private serv:ProductService) { }

  ngOnInit(): void {

    this.serv.get_products().subscribe(
      res=>{this.productsList=res
      console.log(this.productsList)},
      err=>console.log(err)
      
    )
  }
deleteProduct(product:Product){
  let index = this.productsList.indexOf(product);
  this.productsList.splice(index, 1);
  
  this.serv.delete_product(product.id).subscribe(
    res=>{console.log(res);},
    err=>console.log(err)
  )
}

}
