import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../models/company';
import { Product } from '../models/product';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  // URL to web api
  private companyUrl = 'http://localhost:5000/api/companies';
  private productUrl = 'http://localhost:5000/api/products';
  constructor(private http: HttpClient) {}

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.companyUrl);
  }

  getCompanyById(id: any): Observable<Company> {
    return this.http.get<Company>(`${this.companyUrl}/${id}`);
  }

  addCompany(company: Company): Observable<any> {
    const body = JSON.stringify(company);
    console.log(body);
    return this.http.post<any>(this.companyUrl, body, httpOptions);
    // return this.http.post<any>(this.companyUrl, company, httpOptions);
  }

  updateCompanyById(company: Company, id: any): Observable<Company> {
    const body = JSON.stringify(company);
    console.log(id);
    console.log(body);
    return this.http.put<Company>(
      `${this.companyUrl}/${id}`,
      body,
      httpOptions
    );
    // return this.http.put<Company>(
    //   `${this.companyUrl}/${id}`,
    //   company,
    //   httpOptions
    // );
  }

  deleteCompanyById(id: any): Observable<Company> {
    return this.http.delete<Company>(`${this.companyUrl}/${id}`);
  }

  getProducts(): Observable<Product> {
    // return this.getCompanies()['products'];

    return this.http.get<Product>(this.productUrl);
  }
}

// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class CompanyService {

//   constructor() { }
// }
