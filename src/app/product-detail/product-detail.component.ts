import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  name: string;
  id: string;
  image: string;
  details: string;
  price: string;
  company: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
      this.name = params['name'];
    });
    this.productService.getProductById(this.id).subscribe((result) => {
      this.company = result['company'];
      this.details = result['details'];
      this.image = result['image'];
      this.price = result['price'];
    });
  }

  delete(): void {
    console.log(this.id);
    this.productService
      .deleteProductById(this.id)
      .subscribe((data) => console.log(data));
  }
}
