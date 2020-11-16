import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

import { AuthModule } from './auth/auth.module';
import { ServicesComponent } from './services/services.component';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { UpdateCompanyDetailsComponent } from './update-company-details/update-company-details.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { UpdateProductDetailsComponent } from './update-product-details/update-product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProfileComponent,
    ServicesComponent,
    CompaniesListComponent,
    AddCompanyComponent,
    CompanyDetailComponent,
    UpdateCompanyDetailsComponent,
    ProductsListComponent,
    AddProductComponent,
    ProductDetailComponent,
    UpdateProductDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthModule, //from auth.module (additional routes defined here)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
