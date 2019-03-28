import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//사용할 컴포넌트
import { HeroComponent } from './hero/hero.component'
import { HeroDetailComponent } from './hero-detail/hero-detail.component'
import { DashboardComponent} from './dashboard/dashboard.component'
//사용할 객체
import { hero } from './hero'

//url에 따라서 어떤 컴포넌트랑 연결해야 할지를 지정해주는 페이지

//상수에 경로 지정하기
const routes: Routes = [
  //특별히 path가 지정되지 않을 경우 dashboard로 모두 보내라
  {path:'', redirectTo:'/dashboard', pathMatch:'full'},
  //path와 컴포넌트 연결 작업 path는 '/' 생략하고쓴다
  {path:'dashboard', component:DashboardComponent},
  //:id <- 파라미터 요렇게 넘긴다
  {path:'detail/:id', component:HeroDetailComponent},
  {path:'hero', component : HeroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
