import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarousellComponent } from './carousell/carousell.component';
import { SideBoxComponent } from './side-box/side-box.component';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {AdminComponent} from "./admin/admin.component";
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';

import {environment} from "../environments/environment";

import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarousellComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    SideBoxComponent,
    AddTutorialComponent,
    TutorialDetailsComponent,
    TutorialsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseDB),
    AngularFireDatabaseModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
