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

@NgModule({
  declarations: [AppComponent, AuthComponent, NavbarComponent, ContactComponent, AboutComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
