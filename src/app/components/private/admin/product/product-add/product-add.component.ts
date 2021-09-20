import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  listCategories = [];
  formAddProduct: FormGroup
  constructor(private fb: FormBuilder, private serv: ProductService, private categoryservice: CategoryService,
    private router: Router) {
    let formControls =
    {
      name: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z .'-]*"),
        Validators.minLength(2)
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      price: new FormControl('', [
        Validators.required

      ]),
      image: new FormControl('', [
        Validators.required
      ]),
      category: new FormControl('', [
        Validators.required
      ])


    }
    this.formAddProduct = this.fb.group(formControls);

  }


  ngOnInit(): void {
    this.categoryservice.get_categories().subscribe(
      res => this.listCategories = res,
      err => console.log(err)
    )

  }
  addProduct() {
    let data = this.formAddProduct.value;


    let cat = new Category(data.category.id, data.category.name);

    let product = new Product(undefined, data.name, data.price,data.image, data.description, cat);
console.log(product);
    this.serv.add_product(product).subscribe(
      res => {
        console.log(res);
        this.router.navigateByUrl('/products-list')
      },
      err => { console.log(err) }
    )
  }
  get name() {
    return this.formAddProduct.get('name');
  }
  get description() {
    return this.formAddProduct.get('description');
  }
  get price() {
    return this.formAddProduct.get('price');
  }
  get image() {
    return this.formAddProduct.get('image');
  }
  get category() {
    return this.formAddProduct.get('category')
  }
}
