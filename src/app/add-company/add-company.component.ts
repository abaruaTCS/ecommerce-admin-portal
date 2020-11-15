import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CompanyService } from '../services/company.service';
import { Company } from '../models/company';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css'],
})
export class AddCompanyComponent implements OnInit {
  companyRef = new FormGroup({
    cname: new FormControl(),
  });

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {}

  addCompany(): void {
    let name = this.companyRef.value['cname'];
    var company = new Company();
    company.name = name;
    this.companyService
      .addCompany(company)
      .subscribe((data) => console.log(data));
  }
}
