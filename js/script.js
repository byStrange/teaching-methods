class Person {
  constructor(name, age){
    this.name= name;
    this.age = age;
  }
  method1() {
    console.log(this)
    console.log(typeof this)
  }
  run() {
    console.log(this.name + ' ran away')
    console.log("when he was " + this.age)
  }
}

let person = new Person('John ', 5)
// person.method1()
person.run()
