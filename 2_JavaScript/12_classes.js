// classes are a way to define blueprints for createing objects
// custom class
class Character {
  constructor(rank, power, color) {
    this.rank = rank;
    this.power = power;
    this.color = color;
  }

  level() {
    const level = this.rank * this.power;
    return level;
  }

  costume() {
    return `costume color is ${this.color}`;
  }
}

const zoro = new Character(69, 56, "Green"); //instance or an object of class Character
console.log(zoro);
const levelOfZoro = zoro.level();
console.log(levelOfZoro);

const luffy = new Character(1, 100, "yellow");
console.log(luffy);

// predefined class
const date1 = new Date();
console.log(date1.getFullYear());

const map = new Map();
map.set("name", "rohan");
map.set("age", 34);

const firstName = map.get("name");
console.log(firstName);
