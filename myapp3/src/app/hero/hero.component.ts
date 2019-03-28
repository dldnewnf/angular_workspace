import { Component, OnInit } from '@angular/core';
import { hero } from '../hero'
import { HeroService } from '../hero.service'
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  //생성자를 이용해서 서비스를 주입받는다.
  constructor(private heroService : HeroService) { }

  heros : hero[]; // service로부터 전달받을 객체 참조 변수
  ngOnInit() {
    //객체를 가져온다.
    this.heros = this.heroService.getHeros();
  }
  //선택 항목 저장할 변수
  selectedHero : hero; 
  onSelect(hero:hero) : void{
    //함수 뒤에  : 반환형
    this.selectedHero  = hero;
  }
}
