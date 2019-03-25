"use strict";
exports.__esModule = true;
//testValidator.ts
var zipcodeValidator_1 = require("./zipcodeValidator");
var myValidator = new zipcodeValidator_1.ZipcodeValidator();
console.log(myValidator.isAcceptable("155-000"));
console.log(myValidator.isAcceptable("155000"));
console.log(myValidator.isAcceptable("15000"));
console.log(myValidator.isAcceptable("1a000"));
