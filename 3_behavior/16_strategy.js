class Vehicle {
    travelTime() {
        return this.timeTaken;
    }
}

class Bus extends Vehicle {
    constructor() {
        super();
        this.timeTaken = 10;
    }
}

class Taxi extends Vehicle {
    constructor() {
        super();
        this.timeTaken = 5;
    }
}

class Car extends Vehicle {
    constructor() {
        super();
        this.timeTaken = 3;
    }
}

class Commutre {
    travel(transport) {
        return transport.travelTime();
    }
}

const commute = new Commutre();
console.log(commute.travel(new Bus()));
console.log(commute.travel(new Taxi()));
console.log(commute.travel(new Car()));


