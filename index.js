// YOUR CODE HERE
// Instructions
// Your assignment is to create a class named Car in JavaScript. This class will create objects that have three properties:
// 1.	make (String) - The car's manufacturer. E.g. Honda
// 2.	model (String) - The type of model. E.g. Civic
// 3.	year (Integer) - Four digit year the car was made. E.g. 1998


class Car {
    constructor(make, model, year) {
      this.make = make
      this.model = model
      this.year = year
    }


// Your class should also have the following methods:
// •	honk - This method should log "BEEP BEEP!" to the console when called.

    honk () {
        console.log ("BEEP BEEP!")
    }

// •	performMaintenance - This method should use the setTimeout function to log "maintenance complete" to the console after exactly 3 seconds.
// After you have created your Car class do the following in the order listed below:

    performMaintenance(){
        setTimeout(function() {
            console.log('Maintenance complete')
          }, 3000)
    }
}

// 1.	Create a variable named mySweetRide and assign it a car created with 
//your class using the following arguments:
// o	make: 'Pontiac'
// o	model: 'Fiero'
// o	make: 1988
// 2.	call mySweetRide's honk method once
// 3.	call mySweetRide's performMaintenance method once
// Running the index.html will run the included tests for this assignment. All of the tests should pass when you have completed the requirements listed above.

var mySweetRide = new Car('Pontiac', 'Fiero' , 1988)
mySweetRide.honk()
mySweetRide.performMaintenance ()


