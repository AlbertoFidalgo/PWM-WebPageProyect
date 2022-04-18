import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CarousellComponent } from './carousell/carousell.component';
import { SideBoxComponent } from './side-box/side-box.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarousellComponent,
    SideBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
