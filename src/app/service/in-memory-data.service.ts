// in-memory-data.service.ts 文件已代替了 mock-heroes.ts 文件，现在后者可以安全的删除了。
// 等服务器就绪后，你就可以抛弃这个内存 Web API，应用的请求将直接传给服务器。
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../module/hero'; 

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(){
    const heroes = [
      { id: 11, name: 'Dr Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' },
    ];
    return {heroes};
  }

  constructor() { }
  // Math.max(...heroes.map(hero => hero.id)) 找到数组中最大的id，再+1。
  genId(heroes:Hero[]):number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
