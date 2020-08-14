import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { catchError,  tap } from 'rxjs/operators';

import {Hero} from '../module/hero';
// 不需要mock了，用in-memory-data.ts来代替，它就像一个数据库，可以用http来请求。
// import {HEROES} from '../mock/mock-heroes';
import { Observable, of} from 'rxjs';
// 将message服务注入进来
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes';
  httpOptions = {
    headers:new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(
    private messageService:MessageService,
    private http:HttpClient,
    ) { }

  // 添加一个方法，返回模拟的英雄列表
  // getHeroes():Hero[] {
  //   return HEROES;
  // }
  // 包装messageService方法
  private log(message:string){
    this.messageService.add(`HeroService:${message}`);
  }

  // 错误处理
  private handleError<T>(operation = 'operation',result?: T){
    return (error:any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }

  // rxjs 中的of函数来模拟从服务器返回的数据。
  getHeroes():Observable<Hero[]>{
    // return of(HEROES); 改成真正的http请求
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      tap(_ => this.log('fetched heroes')),
      catchError(this.handleError<Hero[]>('getHeroes',[]))
    )
  }

  getHero(id:number):Observable<Hero>{
    const url = `${this.heroesUrl}/${id}`;
    // return of(HEROES.find(hero => hero.id === id));
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    )
  }

  updateHero(hero:Hero):Observable<any> {
    return this.http.put(this.heroesUrl,hero,this.httpOptions).pipe(
      tap( _ => this.log(`updated hero id = ${hero.id}`)),
      catchError(this.handleError<any>('udapteHero'))
    )
  }

  addHero(hero:Hero):Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl,hero,this.httpOptions).pipe(
      tap((newHero:Hero) => this.log(`added hero w/ id = ${newHero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    )
  }

  // 删除英雄
  deleteHero(hero:Hero | number):Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete<Hero>(url,this.httpOptions).pipe(
      tap(_ => this.log(`deleted hero id = ${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    )
  }

  // 搜索英雄
  searchHeroes(term:string):Observable<Hero[]>{
    if(!term.trim()){
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(x => x.length?
         this.log(`found heroes matching "${term}"`):
         this.log(`no heroes matching "${term}"`)
        ),
        catchError(this.handleError<Hero[]>('searchHeroes',[]))
    )
  }


}
