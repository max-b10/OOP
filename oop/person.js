const Person = function (firstName, lastName, age, likes = []) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.likes = likes;
};

Person.prototype.getBio = function () {
  let bio = `${this.firstName} is ${this.age}.`;
  this.likes.forEach((like) => {
    bio += ` ${this.firstName} likes ${like}.`;
  });
  return bio;
};

Person.prototype.setName = function (fullName) {
  const names = fullName.split(" ");
  this.firstName = names[0];
  this.lastName = names[1];
};

const me = new Person("Bob", "Smith", 50, ["eating", "sleeping"]);

me.getBio = function () {
  return "this is fake";
};

me.setName("Baz Turner");
console.log(me.getBio());

const person2 = new Person("Bill", "Stone", 20);

Person.prototype.getBio = function () {
  return "Testing Testing";
};

console.log(person2.getBio());