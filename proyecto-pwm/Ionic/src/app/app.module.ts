import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {RouteReuseStrategy, RouterModule} from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {environment} from '../environments/environment';



import {AngularFireModule} from '@angular/fire/compat';


// Import our components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {HeaderComponent} from './components/header/header.component';
import {UserComponent} from './components/user/user.component';
import {HomeComponent} from './components/home/home.component';
import {CatalogueComponent} from './components/catalogue/catalogue.component';
import {CarousellComponent} from './components/home/carousell/carousell.component';
import {ElementComponent} from './components/element/element.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    UserComponent,
    HomeComponent,
    CarousellComponent,
    CatalogueComponent,
    ElementComponent
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
