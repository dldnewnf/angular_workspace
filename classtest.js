//classtest.ts
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//class
var Car = /** @class */ (function () {
    function Car(carName, numTier) {
        this.carName = carName;
        this.numTier = numTier;
    }
    Car.prototype.getNumTier = function () { return this.numTier; };
    Car.prototype.getCarName = function () { return this.carName; };
    return Car;
}());
var myCar = new Car("비싼차", 4);
console.log(myCar.getNumTier());
console.log(myCar.getCarName());
//extends
var Bus = /** @class */ (function (_super) {
    __extends(Bus, _super);
    function Bus(carName, numTier, client) {
        var _this = 
        //부모 생성자 호출
        _super.call(this, carName, numTier) || this;
        // this.carName = carName;
        // this.numTier = numTier;
        _this.client = client;
        return _this;
    }
    Bus.prototype.display = function () {
        console.log("\uC790\uB3D9\uCC28\uC774\uB984 : " + this.carName);
        console.log("\uD0C0\uC774\uC5B4\uAC1C\uC218 : " + this.numTier);
        console.log("\uC2B9\uAC1D \uC218 : " + this.client);
    };
    return Bus;
}(Car));
var mybus;
mybus = new Bus("40인승버스", 4, 40);
mybus.display();
var Address = /** @class */ (function () {
    function Address() {
        this.addressBookName = "친구들주소록";
    }
    Address.prototype.setBookName = function (addressBookName) {
        this.addressBookName = addressBookName;
    };
    Address.prototype.getBookName = function () {
        return this.addressBookName;
    };
    return Address;
}());
var myAddressBook = new Address();
console.log('\n');
console.log(myAddressBook.getBookName());
myAddressBook.setBookName("원수들주소록");
console.log(myAddressBook.getBookName());
