import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-update-product-details',
  templateUrl: './update-product-details.component.html',
  styleUrls: ['./update-product-details.component.css'],
})
export class UpdateProductDetailsComponent implements OnInit {
  name: string;
  id: string;
  image: string;
  price: string;
  details: string;
  company: string;

  productRef = new FormGroup({
    // code: new FormControl(),
    name: new FormControl(),
    details: new FormControl(),
    image: new FormControl(),
    price: new FormControl(),
    company: new FormControl(),
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
      this.name = params['name'];
      this.price = params['price'];
      this.company = params['company'];
      this.image = params['image'];
      this.details = params['detail'];
      console.log(this.image);
    });
  }

  update(): void {
    var p = new Product();
    p.company = this.productRef.value['company'];
    p.details = this.productRef.value['details'];
    p.image = this.productRef.value['image'];
    p.price = this.productRef.value['price'];
    p.name = this.productRef.value['name'];
    this.productService
      .updateProductById(p, this.id)
      .subscribe((data) => console.log(data));
  }
}
