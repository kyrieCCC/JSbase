class person {
    name;
    age;
    height;
    constructor(name, age, height) {
        this.name = name
        this.age = age
        this.height = height
    }

    getName() {
        console.log(this.name)
    }
    setName(newName) {
        this.name = newName
    }
}

const newPerson = new person('zy', '18', '160')
console.log(newPerson.__proto__ === person.prototype) //true
newPerson.getName()
// console.log(newPerson.#name)


class littlePerson extends person {
    constructor(name, age, height) {
        super(name, age, height)
    }
    getNewAge() {
        console.log(this.age)
    }
}

const ppp = new littlePerson('ph', '18', 165)
console.log(ppp)
ppp.getNewAge()