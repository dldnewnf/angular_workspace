//classtest.ts

//class
class Car{
    numTier : number;
    carName : string;

    constructor(carName:string, numTier:number){
        this.carName = carName;
        this.numTier = numTier;
    }

    getNumTier(){return this.numTier;}
    getCarName(){return this.carName;}
}

let myCar = new Car("비싼차", 4);
console.log(myCar.getNumTier());
console.log(myCar.getCarName());

//extends
class Bus extends Car{
    client : number;

    constructor(carName:string, numTier : number , client : number){
        //부모 생성자 호출
        super(carName, numTier);
        // this.carName = carName;
        // this.numTier = numTier;
        this.client = client;
    }

    display(){
        console.log(`자동차이름 : ${this.carName}`);
        console.log(`타이어개수 : ${this.numTier}`);
        console.log(`승객 수 : ${this.client}`);
    }
}

let mybus : Bus;
mybus = new Bus("40인승버스",4, 40 );
console.log('\n');
mybus.display();

//interface 연습
interface AddressInterface{
    addressBookName : string;
    setBookName( addressBookName:string);
    getBookName();
}
class Address implements AddressInterface{
    addressBookName : string;
    setBookName( addressBookName:string){
        this.addressBookName=addressBookName;
    }
    getBookName(){
        return this.addressBookName;
    }
    constructor(){
        this.addressBookName="친구들주소록";
    }
}

let myAddressBook = new Address();
console.log('\n');
console.log(myAddressBook.getBookName());
myAddressBook.setBookName("원수들주소록");
console.log(myAddressBook.getBookName());




