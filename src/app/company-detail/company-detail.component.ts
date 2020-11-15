import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css'],
})
export class CompanyDetailComponent implements OnInit {
  name: string;
  id: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private companyService: CompanyService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.name = params['name'];
      this.id = params['id'];
    });
  }

  delete(): void {
    console.log(this.id);
    this.companyService
      .deleteCompanyById(this.id)
      .subscribe((data) => console.log(data));
  }
}
