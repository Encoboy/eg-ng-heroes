import { Component, OnInit } from '@angular/core';
import { Hero } from '../../module/hero';
import { HeroService } from '../../service/hero.service';
import { MessageService } from '../../service/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroes:Hero[];

  // 在这里注入服务
  constructor(private heroService:HeroService,private messageService:MessageService) { }
  
  ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes():void {
    // 这里也要相应的修改，向着服务文件的模式看齐。
    // this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }



}
