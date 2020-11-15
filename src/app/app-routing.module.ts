import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';

import { AuthGuard } from './auth/auth.guard';
import { ServicesComponent } from './services/services.component';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { UpdateCompanyDetailsComponent } from './update-company-details/update-company-details.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductsListComponent } from './products-list/products-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'services', component: ServicesComponent, canActivate: [AuthGuard] },
  {
    path: 'companies-list',
    component: CompaniesListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'addCompany',
    component: AddCompanyComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'companyDetail',
    component: CompanyDetailComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'updateCompanyDetail',
    component: UpdateCompanyDetailsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'addProduct',
    component: AddProductComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'products-list',
    component: ProductsListComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
