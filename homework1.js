// Hamster
class Hamster {
  constructor(owner, name, price) {
    this.owner = owner;
    this.name = name;
    this.price = 15;
  }
  // Methods
  // Method 1
  wheelRun() {
    console.log("squeak squeak");
  }
  // Method 2
  eatFood() {
    console.log("nibble nibble");
  }
  // Method 3
  getPrice() {
    console.log(this.price);
  }
}

const hammy = new Hamster("Sandy");
// console.log(hammy)
// hammy.wheelRun()
// hammy.eatFood()
// hammy.getPrice()

// Person
class Person {
  constructor(name, age, height, weight, mood, hamster, bankAccount, price) {
    this.name = name;
    this.age = 0;
    this.height = 0;
    this.weight = 0;
    this.mood = 0;
    this.hamster = [];
    this.bankAccount = 0;
    this.price = 15;
  }
  // Methods
  getName() {
    console.log(this.name);
  }
  getAge(age) {
    console.log(`Age: ${age}`);
  }
  getWeight() {
    console.log(`Weight: ${this.weight}`);
  }
  greet() {
    console.log(`Hello ${this.name}!`);
  }
  eat(meals) {
    this.weight = meals + this.weight;
    console.log(`Weight: ${this.weight}`);
    this.mood = meals + this.mood;
    console.log(`Mood: ${this.mood}`);
  }
  exercise(workouts) {
    this.weight = this.weight - workouts * 1;
    console.log(`Weight: ${this.weight}`);
  }
  ageUp(years) {
    this.age = years * 1 + this.age;
    console.log(`Age: ${this.age}`);
    this.height = this.height + years;
    console.log(`Height: ${this.height}`);
    this.weight = years * 1 + this.weight;
    console.log(`Weight: ${this.weight}`);
    this.mood = this.mood - years;
    console.log(`Mood: ${this.mood}`);
    this.bankAccount = years * 10 + this.bankAccount;
    console.log(`Bank Account: $${this.bankAccount}`);
  }
  buyHamster(hamster) {
    this.mood = this.mood + 10;
    console.log(`Mood: ${this.mood}`);
    this.hamster = this.hamster.push(hamster);
    console.log(`Hamster: ${this.hamster}`);
    this.bankAccount = this.bankAccount - this.price;
    console.log(`Bank Account: ${this.bankAccount}`);
  }
}

// Create a Story with your Person class
const timmy = new Person("Timmy");
timmy.getName();
timmy.ageUp(5);
timmy.eat(5);
timmy.exercise(5);
timmy.ageUp(9);

const gus = new Hamster("Timmy", "Gus");
console.log(gus);

timmy.buyHamster("Gus");
timmy.ageUp(15);
timmy.eat(2);
timmy.exercise(2);
