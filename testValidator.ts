//testValidator.ts
import {ZipcodeValidator} from "./zipcodeValidator";

let myValidator = new ZipcodeValidator();
console.log(myValidator.isAcceptable("155-000"));
console.log(myValidator.isAcceptable("155000"));
console.log(myValidator.isAcceptable("15000"));
console.log(myValidator.isAcceptable("1a000"));