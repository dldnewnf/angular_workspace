import { Injectable } from '@angular/core';
import { hero } from './hero'
import { HEROS } from './mock-heros'
//@injectable 꼭들어가야댐
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
  //데이터 요청받을 시 응답해야함
  getHeros() : hero[]{
    return HEROS;
  }
}
