/*
// -------------------------
// Dynamic Prototype Pattern
// -------------------------

// constructor function to create car objects
function Car(make, model, year) {
    this.make   = make;
    this.model  = model;
    this.year   = year;

    // constructor prototype to share properties and methods
    if ( typeof this.sayCar !== "function" ) {
        Car.prototype.sayCar = function() {
            alert('I have a ' + this.year + ' ' + this.make + ' ' + this.model + '.');    
        }        
    }
}


// create 2 car objects for John and Jane
var johnCar = new Car('Ford', 'F150', '2011'),
    janeCar = new Car('Audi', 'A4', '2007');

// call method on Jane's car
janeCar.sayCar();*/

function Bear(name, type, age) {
  this.name = name;
  this.type = type;
  this.age = age;

  if (typeof this.greet !== 'function') {
    Bear.prototype.greet = function() {
      console.log('Hi, I am ' + this.name + ' the ' + this.type + ' bear. I am ' + this.age + ' years old.');
    }
  }

  if (typeof this.growl !== 'function') {
    Bear.prototype.growl = function() {
      console.log('grrrrrrr');
    }
  }
}

var bob = new Bear('Bob', 'grizzly', 12);
var ben = new Bear('Ben', 'brown', 3);
var tom = new Bear('Tom', 'polar', 8);

bob.greet();
bob.growl();
ben.greet();
ben.growl();
tom.greet();
tom.growl();