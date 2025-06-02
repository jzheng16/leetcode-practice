// Understanding apply, call, and bind


// 1. What is call?

// call executes a function with a given this value 

function Animal(name, sound) {
	this.name = name;
	this.sound = sound;
	this.greet = function() {
		return `${this.name} says ${this.sound}`;
	}
}


const dog = new Animal('dog', 'woof');

console.log(new Animal('cat', 'meow').greet.call({name: 'cat', sound: 'meow'}))


function greet() {
  console.log(this.animal, "typically sleep between", this.sleepDuration);
}

const obj = {
  animal: "cats",
  sleepDuration: "12 and 16 hours",
};

greet.call(obj);
// 2. What is apply?

// Same as call but the arguments are passed as an array
function testApply(x, y) {
	const sum = x + y;
	return sum;
}

console.log(testApply.apply(null, [1,2])); // null indicates that the function is not bound to any object

// Real world scenario: using apply to find the max of an array
const arr = [1,2,3,4,5,6,7,8,9,10];

console.log(Math.max.apply(null,arr));

// 3. What is bind?

// bind returns a new function with the this value set to the first argument passed to bind

const newAnimal = new Animal('rabbit', 'squeak').greet.bind({name: 'poo', sound: 'poo'});

console.log(newAnimal())