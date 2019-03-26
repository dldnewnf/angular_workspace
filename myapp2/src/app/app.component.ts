import { Component } from '@angular/core';
import { Hero } from './Hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp2';
  heros = HEROS;
  //선택항목 저장 변수 만들기
  selectedHero : Hero;
  onSelect(hero : Hero){
    //hero : Hero Hero타입의 변수
    //Hero hero;
    this.selectedHero = hero;
  }
}
const HEROS:Hero[]=[
  {id:1, name:"배트맨", description:"돈많음"},
  {id:2, name:"조커", description:"나쁨"},
  {id:3, name:"안중근", description:"정의로움"},
  {id:4, name:"이순신", description:"거북선"},
  {id:5, name:"홍길동", description:"아버지 못부름"},
  {id:6, name:"상어", description:"큼"},
  {id:7, name:"고래", description:"크다"},
  {id:8, name:"금붕어", description:"잘까먹음"}
];