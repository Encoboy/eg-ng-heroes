import { Component, OnInit } from '@angular/core';
import { Hero } from '../../module/hero';
import { HeroService } from '../../service/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes:Hero[] = [];
  constructor(private heroSerivece:HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes():void {
    this.heroSerivece.getHeroes()
    .subscribe(heroes => this.heroes = heroes.slice(1,5))
  }

}
