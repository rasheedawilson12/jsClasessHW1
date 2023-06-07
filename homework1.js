// Hamster
class Hamster {
  constructor(owner, name, price) {
    this.owner = owner;
    this.name = "Hammy";
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
console.log(hammy);
hammy.wheelRun();
hammy.eatFood();
hammy.getPrice();
