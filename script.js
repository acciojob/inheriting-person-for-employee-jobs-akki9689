// complete this js code
function Person(name, age) {
	this.name=name;
	this.age=age;
}
Person.prototype.greet=function() {
	console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
}

function Employee(name, age, jobTitle) {
	Person.call(this, name, age);
    
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee; // Reset the constructor to Employee

Employee.prototype.jobGreet = function() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};
const person1 = new Person("Alice", 25);
person1.greet();


employee1.greet();
employee1.jobGreet();
// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
