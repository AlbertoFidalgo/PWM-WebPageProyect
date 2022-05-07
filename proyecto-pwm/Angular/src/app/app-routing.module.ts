import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {HomeComponent} from "./components/home/home.component";
import {UsersListComponent} from "./components/users-list/users-list.component";
import {RegisterComponent} from "./components/register/register.component";
import {LoginComponent} from "./components/login/login.component";
import {AdminComponent} from "./components/admin/admin.component";
import {MoviesComponent} from "./components/catalog/movies/movies.component";
import {MusicComponent} from "./components/catalog/music/music.component";
import {SeriesComponent} from "./components/catalog/series/series.component";
import {PodcastComponent} from "./components/catalog/podcast/podcast.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersListComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'music', component: MusicComponent },
  { path: 'series', component: SeriesComponent },
  { path: 'podcast', component: PodcastComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

