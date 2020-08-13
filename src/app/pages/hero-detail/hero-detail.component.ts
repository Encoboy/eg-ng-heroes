import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../module/hero';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../../service/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
  // @Input() hero:Hero; 获取父组件传过来的数据
  hero:Hero;
  constructor(
    private route:ActivatedRoute,
    private heroService:HeroService,
    private location: Location,
    ) { }

  ngOnInit(): void {
    this.getHero();
  }

  getHero():void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
    .subscribe(hero => this.hero = hero);
  }

  goBack():void {
    this.location.back();
  }
 
}
