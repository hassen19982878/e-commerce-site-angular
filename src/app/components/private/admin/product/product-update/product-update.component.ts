import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { Product } from 'src/app/models/product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  listCategories=[];
  formUpdateProduct: FormGroup
  constructor(private fb: FormBuilder,private route:ActivatedRoute,private serv:ProductService,private router:Router,private categoryservice:CategoryService) {
    let formControls =
    {
      name: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z .'-]*"),
        Validators.minLength(2)
      ]),
      description:new FormControl('',[
        Validators.required,
        Validators.minLength(6)
      ]),
      price:new FormControl('',[
        Validators.required
        
      ]),
      image:new FormControl('',[
        Validators.required
      ]),
      category:new FormControl('',[
        Validators.required
      ])


    }
    this.formUpdateProduct = this.fb.group(formControls);

  }

  ngOnInit(): void {
    this.categoryservice.get_categories().subscribe(
      res => this.listCategories = res,
      err => console.log(err)
    )
    let idProduct = this.route.snapshot.params.id;
    this.serv.getOneProduct(idProduct).subscribe(
      res => {
        let product = res;
        console.log(product);
        this.formUpdateProduct.patchValue({
          name: product.name,
          description:product.description,
          price:product.price,
          image:product.image,
          category:product.category.id
        })
      },
      err => { console.log(err); }

    )



  }
  updateProduct(){console.log(this.formUpdateProduct.value);
  
  
    let data = this.formUpdateProduct.value;
    let idProduct = this.route.snapshot.params.id;
    let cat = new Category(data.category.id,data.category.name)
    let product = new Product(idProduct, data.name,data.price,data.image,data.description,cat);
this.serv.update_product(product).subscribe(
res=>{this.router.navigateByUrl('/products-list');},
err=>{console.log(err);})
  }
  get name() {
    return this.formUpdateProduct.get('name');
  }
  get description() {
    return this.formUpdateProduct.get('description');
  }
  get price() {
    return this.formUpdateProduct.get('price');
  }
  get image() {
    return this.formUpdateProduct.get('image');
  }
  get category(){
    return this.formUpdateProduct.get('category')
  }
}
