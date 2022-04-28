import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CarousellComponent } from './components/carousell/carousell.component';
import { SideBoxComponent } from './components/side-box/side-box.component';
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {AdminComponent} from "./components/admin/admin.component";
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UsersListComponent } from './components/users-list/users-list.component';

import {environment} from "../environments/environment";

import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import {RouterModule} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {MatCardModule} from "@angular/material/card";



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CarousellComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    SideBoxComponent,
    UserDetailsComponent,
    UsersListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserModule /* or CommonModule */,
    MatCardModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseDB),
    AngularFireDatabaseModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
