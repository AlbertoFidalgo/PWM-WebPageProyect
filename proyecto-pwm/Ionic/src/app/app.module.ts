import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {RouteReuseStrategy, RouterModule} from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {environment} from '../environments/environment';



import {AngularFireModule} from "@angular/fire/compat";


// Import our components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {LoginComponent} from "./components/login/login.component";
import {RegisterComponent} from "./components/register/register.component";
import {HeaderComponent} from "./components/header/header.component";



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(),

    AngularFireModule.initializeApp(environment.firebaseDB),

    AppRoutingModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,

    ],

  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
