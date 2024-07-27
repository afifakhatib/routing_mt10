import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserdashboardComponent } from './shared/components/userdashboard/userdashboard.component';
import { ProductsdashboardComponent } from './shared/components/productsdashboard/productsdashboard.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { HomeComponent } from './shared/components/home/home.component';
import { DailogboxComponent } from './shared/components/dailogbox/dailogbox.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { ProductComponent } from './shared/components/productsdashboard/product/product.component';
import { ProductFormComponent } from './shared/components/productsdashboard/product-form/product-form.component';
import { UserComponent } from './shared/components/userdashboard/user/user.component';
import { UserFormComponent } from './shared/components/userdashboard/user-form/user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserdashboardComponent,
    ProductsdashboardComponent,
    NavbarComponent,
    HomeComponent,
    DailogboxComponent,
    PageNotFoundComponent,
    ProductComponent,
    ProductFormComponent,
    UserComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
