import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from '../pages/heroes/heroes.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { HeroDetailComponent } from '../pages/hero-detail/hero-detail.component';
// 路由配置
const routes:Routes = [
  {path:'dashboard',component:DashboardComponent},
  // 设置第一个要跳转的页面
  {path:'',redirectTo:'/dashboard',pathMatch:'full'},
  {path:'detail/:id',component:HeroDetailComponent},
  {path:'heroes',component:HeroesComponent},
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
