//자바스크립트 함수연습
//파라미터 기본값
function myfunc(a=1, b=2, c=3){
    console.log(`a=${a}`);
    console.log(`b=${b}`);
    console.log(`c=${c}`);
}

myfunc();
myfunc(10);
myfunc(10,20);
myfunc(10,20,30);