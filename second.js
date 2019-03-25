//filename : second.ts
var Greeter = /** @class */ (function () {
    //생성자
    function Greeter(message) {
        this.greeting = message;
    }
    //함수
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("World");
console.log(greeter.greet());
