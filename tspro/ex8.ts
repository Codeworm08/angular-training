class Animal{
    makeSound():string{
        return "Animal";
    }
}

class Dog extends Animal{
    makeSound(): string {
        return "Woof!";
    }
}

class Cat extends Animal {
    makeSound(): string {
        return "Meow!";
    }
}

let dog:Dog = new Dog();
console.log(dog.makeSound())
let animal:Animal = new Animal();
console.log(animal.makeSound());