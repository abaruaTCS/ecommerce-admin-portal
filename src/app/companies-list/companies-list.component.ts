import { Component, OnInit } from '@angular/core';
import { Company } from '../models/company';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.css'],
})
export class CompaniesListComponent implements OnInit {
  companies: Company[];

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    this.companyService.getCompanies().subscribe((result) => {
      this.companies = result;
      console.log(this.companies);
    });
  }
}
