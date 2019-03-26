import { Component } from '@angular/core';
import { Http2ServerResponse } from 'http2';


@Component({
  selector: 'app-root',  //index.html에 보면 app-root있다.  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//@Component 이 키워드 바로 뒤에 있는 클래스는
//자동으로 컴포넌트로 인식된다.
//중간에 다른 클래스를 끼워넣으면 안된다.

//클래스의 변수를 templateUrl의 html에서변수로사용가능
export class AppComponent {
  //클래스 안에 변수 선언
  title = 'My First Angular';
  contents = "앵귤러는 프론트 프레임 워크입니다.";
  //객체 변수 하나 생성
  myHero : Hero = {
    id :1,
    name:"아이언맨",
    description : "토니 스타크, 물리학자"
  }

  hero2 : Hero = {
    id : 2,
    name : "캡틴마블",
    description : "마블 일진"
  }
  heros = HEROS; // 배열 전달

  //클릭했을때 선택된 항목을 저장할 변소ㅜ
  selectedHero : Hero; //선언만

  //선택 이벤트 처리 함수 추가하기
  onSelect(hero:Hero):void{
    this.selectedHero = hero;
    //선택된 항목을 저장할 변수에 전달해준다.
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
//외부로 노출시킬 클래스는 export 붙여줘야함. 
//이 파일 밖에서 사용하려면 export필요, 자바의 public과 유사함 (다르긴한데)
export class Hero{
  id : number;          // 번호
  name : string;        // 이름
  description : string; // 설명
}
