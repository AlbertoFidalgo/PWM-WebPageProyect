import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {HomeComponent} from "./components/home/home.component";
import {RegisterComponent} from "./components/register/register.component";
import {LoginComponent} from "./components/login/login.component";
import {AdminComponent} from "./components/admin/admin.component";
import {CatalogueComponent} from "./components/catalogue/catalogue.component";
import {AuthGuard} from "@angular/fire/auth-guard";
import {ElementComponent} from "./components/element/element.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'catalogue/:type/:genre', component: CatalogueComponent},
  { path: 'catalogue/:type/:genre/:element', component: ElementComponent},
  { path: 'admin', component: AdminComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

