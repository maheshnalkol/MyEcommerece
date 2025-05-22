import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthComponent } from './shared/componentss/auth/auth.component';
import { MaterialModule } from './shared/material/material.module';
import { NavbarComponent } from './shared/componentss/navbar/navbar.component';
import { ContactComponent } from './shared/componentss/contact/contact.component';
import { AboutComponent } from './shared/componentss/about/about.component';
import { HomeComponent } from './shared/componentss/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavbarHeaderComponent } from './shared/componentss/navbar-header/navbar-header.component';
import { FooterComponent } from './shared/componentss/footer/footer.component';
import { CarouselComponent } from './shared/componentss/carousel/carousel.component';
import { CountdownComponent } from './shared/componentss/countdown/countdown.component';
import { CardComponent } from './shared/componentss/card/card.component';
import { RatingComponent } from './shared/componentss/rating/rating.component';
import { AllProductsComponent } from './shared/componentss/all-products/all-products.component';
import { BrowsecategoryComponent } from './shared/componentss/browsecategory/browsecategory.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    NavbarComponent,
    ContactComponent,
    AboutComponent,
    HomeComponent,
    NavbarHeaderComponent,
    FooterComponent,
    CarouselComponent,
    CountdownComponent,
    CardComponent,
    RatingComponent,
    AllProductsComponent,
    BrowsecategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
