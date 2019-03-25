import { StringValidator } from "./validation";

//zipcodeValidator.ts
export const numberRegxp=/^[0-9]+$/;

export class ZipcodeValidator implements StringValidator{
    isAcceptable(s:string){
        return s.length===5 && numberRegxp.test(s); //=== 강제 형변환 하지말라는뜻
    }
}





