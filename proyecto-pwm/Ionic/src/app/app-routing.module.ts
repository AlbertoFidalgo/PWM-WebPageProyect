import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


import {AppComponent} from "./app.component";
import {RegisterComponent} from "./components/register/register.component";
import {LoginComponent} from "./components/login/login.component";
import {UserComponent} from './components/user/user.component';
import {HomeComponent} from './components/home/home.component';

import { SideBoxComponent } from "./components/home/side-box/side-box.component";
import { MobileHomeBox1Component } from "./components/home/mobile-home-box1/mobile-home-box1.component";
import { MobileHomeBox2Component } from "./components/home/mobile-home-box2/mobile-home-box2.component";
import {BottomBoxComponent} from './components/home/bottom-box/bottom-box.component';

const routes: Routes = [

  { path: '', redirectTo: 'AppComponent', pathMatch:'full'
    /*
    loadChildren: () => import('./components/home/bottom-box/bottom-box.component').then( m => m.BottomBoxComponent),
    loadChildren: () => import('./components/home/mobile-home-box1/mobile-home-box1.component').then( m => m.MobileHomeBox1Component),
    loadChildren: () => import('./components/home/mobile-home-box2/mobile-home-box2.component').then( m => m.MobileHomeBox2Component),
    loadChildren: () => import('./components/home/side-box/side-box.component').then( m => m.SideBoxComponent),
    */

  },


  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UserComponent },
  { path: 'home', component: HomeComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
  ],
  declarations: [
    SideBoxComponent,
    MobileHomeBox1Component,
    MobileHomeBox2Component,
    BottomBoxComponent
  ],
  exports: [RouterModule, SideBoxComponent, MobileHomeBox1Component, MobileHomeBox2Component, BottomBoxComponent]
})
export class AppRoutingModule { }
