/*Work with a partner to create a monkey object, which has the following properties:

* name
* species
* foodsEaten

And the following methods:
* eatSomething(thingAsString)
* introduce: producers a string introducing itself, including its name, species, and what it's eaten.

Create 3 monkeys total. Make sure all 3 monkeys have all properties set and methods defined.

Exercise your monkeys by retrieving their properties and using their methods. Practice using both syntaxes
for retrieving properties (dot notation and brackets).

*/

var Monkey = function(name, species){
  this.name = name;
  this.species = species;
  this.foodsEaten = [];
  console.log("Monkey Created")
}

Monkey.prototype.eatSomething = function(food) {
	this.foodsEaten.push(food);
	//console.log(food + " added to .foodsEaten")
}

Monkey.prototype.introduce = function() {
		var lastFood = this.foodsEaten.pop()
		console.log("Hi, I am " + this.name + ", and I am a " + this.species + ". Today I have eaten " + this.foodsEaten.join(", ") + " and " + lastFood + ".")
}

var monkey1 = new Monkey('George', 'Chimpanzee');
monkey1.eatSomething('fish');
monkey1.eatSomething('a tire');
monkey1.eatSomething('the man in the yellow hat');

var monkey2 = new Monkey('King Kong', 'King. Or a Kong');
monkey2.eatSomething('planes');
monkey2.eatSomething('trains');
monkey2.eatSomething('the empire state building');

var monkey3 = new Monkey('Magilla', 'Gorilla');
monkey3.eatSomething('my hat');
monkey3.eatSomething('a brontosaurus');
monkey3.eatSomething('glue');

monkey1.introduce()
monkey2.introduce()
monkey3.introduce()