import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//父传子数据需要的插件
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// 内存 Web 测试http请求使用
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// 创建一个内存数据库
import { InMemoryDataService }  from './service/in-memory-data.service';

import { AppComponent } from './app.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { HeroDetailComponent } from './pages/hero-detail/hero-detail.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { AppRoutingModule } from './router/app-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeroSearchComponent } from './pages/hero-search/hero-search.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService,
      {dataEncapsulation:false},
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
