//validation.ts

//인터페이스 생성 - 우편번호 형식 체크
//하는 함수를 하나 멤버로 갖고 있다.
//isAcceptable('15500')로 형식이 맞으면 true 아니면 false를 반환.
//export 키워드를 쓰지않으면 외부에서 이 인터페이스를 볼 수가 없다.
export interface StringValidator{
    isAcceptable(s:string) : Boolean;
}