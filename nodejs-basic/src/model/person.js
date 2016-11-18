class Person {
  constructor(name) {
    this.name = name
  }

  intro() {
    console.log(`This is ${this.name}`)
  }
}

export default Person