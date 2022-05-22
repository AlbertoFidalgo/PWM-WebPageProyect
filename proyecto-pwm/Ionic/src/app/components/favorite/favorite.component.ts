import { Component, OnInit } from '@angular/core';
import {FavoriteService} from '../../services/favorite.service';
import {AuthService} from '../../services/user.auth.service';
import {ActivatedRoute} from '@angular/router';
import {from, Observable} from "rxjs";

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
})
export class FavoriteComponent implements OnInit {
  user: any;
  titles: Array<string>;
  posters: Array<string>;

  constructor(private favoritesService: FavoriteService, private authService: AuthService,
              route: ActivatedRoute) {
    route.params.subscribe((params) => {
      this.user = params.uid;
    });
  }

  async init() {
    await this.favoritesService.init();
    await this.favoritesService.openStore(this.user);
    const values = await this.favoritesService.getAllKeysValues();
    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    this.titles = new Array<string>();
    this.posters = new Array<string>();
    for (let i = 0; i < values.length; i++) {
      let obj = JSON.parse(values[i].value);
      this.titles[i] = obj.title;
      this.posters[i] = obj.poster;
    }
    console.log(this.titles);
    console.log(this.posters);
    console.log(await this.favoritesService.getAllKeys());
    //await this.favoritesService.clear();
  }

  ngOnInit() {
    this.init();
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  get userSigned(){
    return this.authService.userInfoLogged;
  }

}
