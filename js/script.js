function _person(name, age) {
  this.name = name;
  this.age = age;
}

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static name = 'Person';
  static sum(arr) {
    return arr.reduce((prev, curr) => prev + curr);
  }

  run() {
    console.log(`${this.name} is running`);
  }

}


console.log(new Person().run())
console.log(Person.sum([1, 2, 3]))
console.log(Person.name)