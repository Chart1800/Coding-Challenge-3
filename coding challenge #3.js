// The purpose of this project is to create a car and be able to manage it's speed using methods

// U94741303

// Car class constructor that initializes make and speed
class Car {
    constructor(make, speed) {
        this.carMake = make;
        this.carSpeed = speed;
    }

    // method for acceleration
    accelerate() {
        this.carSpeed += 10;
    }

    // method for brake
    brake() {
        this.carSpeed -= 5;
    }

}

// Create cars
car1 = new Car("BMW", 120);
car2 = new Car("Mercedes", 95);

// Show starting car data
console.log(car1, car2);

//Test both cars multiple times
car1.accelerate();
car1.accelerate();
car1.brake();
car2.brake();
car2.brake();
car2.accelerate();

// Show final Car data
console.log(car1, car2);