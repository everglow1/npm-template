class TestFoo {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  getName() {
    return this.name
  }
  setName(val) {
    this.name = val
  }
}

function handle() {
  console.log('I am handle!')
}

export { TestFoo }