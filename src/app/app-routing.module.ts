import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './shared/componentss/auth/auth.component';
import { HomeComponent } from './shared/componentss/home/home.component';
import { ContactComponent } from './shared/componentss/contact/contact.component';
import { AboutComponent } from './shared/componentss/about/about.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { AllProductsComponent } from './shared/componentss/all-products/all-products.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'contact',
    component: ContactComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'products',
    component: AllProductsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
