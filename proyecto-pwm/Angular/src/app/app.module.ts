import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CarousellComponent } from './components/carousell/carousell.component';
import { SideBoxComponent } from './components/home/side-box/side-box.component';
import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {AdminComponent} from "./components/admin/admin.component";

import {environment} from "../environments/environment";

import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import {RouterModule} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import { MobileHomeBox1Component } from './components/home/mobile-home-box1/mobile-home-box1.component';
import { MobileHomeBox2Component } from './components/home/mobile-home-box2/mobile-home-box2.component';
import { BottomBoxComponent } from './components/home/bottom-box/bottom-box.component';
import { MoviesComponent } from './components/catalog/movies/movies.component';
import { MusicComponent } from './components/catalog/music/music.component';
import { SeriesComponent } from './components/catalog/series/series.component';
import { PodcastComponent } from './components/catalog/podcast/podcast.component';



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
    MobileHomeBox1Component,
    MobileHomeBox2Component,
    BottomBoxComponent,
    MoviesComponent,
    MusicComponent,
    SeriesComponent,
    PodcastComponent
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
        AngularFireDatabaseModule,
        MatFormFieldModule
    ],

  bootstrap: [AppComponent]
})
export class AppModule { }
