import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../Hero';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
  @Input()   //인풋으로받는다. autowired같은거
  hero : Hero;  //import Hero 해줘야댐
  constructor() { }
  //초기화 부분
  ngOnInit() {
  }

}
