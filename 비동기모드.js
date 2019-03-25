//비동기모드
//자바스크립트는 함수자체를 객체로보고, 함수를 변수로 던져줄 수 있다.
//콜백함수 - 호출자가 시스템
//함수의 이름은 안만들거나 내 마음대로 만들 수 있다.
//매게변수는 시스템이 지정해준다

function hello(message, callback){
    console.log(message+" 자바스크립트 입니다.");
    
    //callback 함수 호출하기
    callback();

    
}
var callback1 = function(){
    console.log("콜백함수111 호출");
}
var callback2 = function(){
    console.log("콜백함수222 호출");
}

hello("안녕하세요.", callback1);
hello("반갑습니다.", callback2);