import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// 父传子数据需要的插件 input
import { FormsModule } from '@angular/forms';
// http请求使用功能的module
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

// 装饰器，给下面的class类装饰的。
@NgModule({
  // 所有页面组件
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
  ],
  // 需要使用导入 的module
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
  // 放一些自定义的东西
  providers: [],
  // 绑定的首页
  bootstrap: [AppComponent]
})
export class AppModule { }
