import { Injectable } from '@angular/core';
import {Hero} from '../module/hero';
import {HEROES} from '../mock/mock-heroes';
import { Observable, of} from 'rxjs';
// 将message服务注入进来
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService:MessageService) { }

  // 添加一个方法，返回模拟的英雄列表
  // getHeroes():Hero[] {
  //   return HEROES;
  // }
  // rxjs 中的of函数来模拟从服务器返回的数据。
  getHeroes():Observable<Hero[]>{
    this.messageService.add(`HeroService:fetched heroes`);
    return of(HEROES);
  }

  getHero(id:number):Observable<Hero>{
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

}
