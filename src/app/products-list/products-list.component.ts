import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { CompanyService } from '../services/company.service';
// import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
  products: Product[];

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    this.companyService.getProducts().subscribe((result) => {
      console.log(result[0]);
      console.log(result);
      var objs = JSON.stringify(result);
      console.log(objs);
      console.log(objs.length);
      console.log(objs.split('products'));
      // result.forEach((element) => {
      //   console.log(element);
      // });
    });
  }
}
