import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Company } from '../models/company';
import { Product } from '../models/product';
import { CompanyService } from '../services/company.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  notify: string;
  productRef = new FormGroup({
    // code: new FormControl(),
    name: new FormControl(),
    details: new FormControl(),
    image: new FormControl(),
    price: new FormControl(),
    company: new FormControl(),
  });
  companies: Company[];

  constructor(
    private productService: ProductService,
    private companyService: CompanyService
  ) {}

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe((result) => {
      this.companies = result;
      console.log(result);
    });
  }

  addProduct(): void {
    var product = new Product();
    // product._id = this.productRef.value['code'];
    product.name = this.productRef.value['name'];
    product.details = this.productRef.value['details'];
    product.image = this.productRef.value['image'];
    product.price = this.productRef.value['price'];
    product.company = this.productRef.value['company'];
    this.productService.addProduct(product).subscribe((data) => {
      console.log(data);
      if (data) {
        this.notify = 'Product Added Successfully!';
      }
    });
  }
}
