import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Company } from '../models/company';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-update-company-details',
  templateUrl: './update-company-details.component.html',
  styleUrls: ['./update-company-details.component.css'],
})
export class UpdateCompanyDetailsComponent implements OnInit {
  companyRef = new FormGroup({
    cname: new FormControl(),
  });

  name: string;
  id: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private companySrvice: CompanyService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.name = params['name'];
      this.id = params['id'];
    });
  }

  update(): void {
    var c = new Company();
    c.name = this.companyRef.value['cname'];
    console.log(this.id);
    this.companySrvice
      .updateCompanyById(c, this.id)
      .subscribe((data) => console.log(data));
  }
}
