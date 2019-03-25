//filename : second.ts
class Greeter{
    greeting:string; //string 변수 선언
    
    //생성자
    constructor(message:string){
        this.greeting=message;
    }

    //함수
    greet(){
        return "Hello, "+this.greeting; 
    }
}
//객체 만들기
let greeter = new Greeter("World");
console.log(greeter.greet());
