import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.css']
})
export class CategoryUpdateComponent implements OnInit{
  formUpdateCategory: FormGroup

  constructor(private fb: FormBuilder, private route: ActivatedRoute,private serv: CategoryService,private router:Router) {
    let formControls =
    {
      name: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z .'-]*"),
        Validators.minLength(2)
      ])


    }
    this.formUpdateCategory = this.fb.group(formControls);

  }

  ngOnInit(): void {
    let idCategory = this.route.snapshot.params.id;
    console.log(idCategory);
    this.serv.getOneCategory(idCategory).subscribe(
      res => {
        let category = res;
        console.log(category);
        this.formUpdateCategory.patchValue({
          name: category.name

        })
      },
      err => { console.log(err); }

    )

  }
  
  updateCategory() {

    let data = this.formUpdateCategory.value;
    let idCategory = this.route.snapshot.params.id;

    console.log(data);
    let category = new Category(idCategory, data.name);
this.serv.update_category(category).subscribe(
res=>{this.router.navigateByUrl('/categories-list');},
err=>{console.log(err);})}


  


get name() {
  return this.formUpdateCategory.get('name');
}

}

