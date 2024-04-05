// По можливості кожен клас створювати в окремому файлі, і створити окремий файл для створення всіх об'єктів та роботи з ними.

// Створити клас Animal. Додати до нього властивості color, name, type. Та методи sayHello та run. Реалізацію методів зробіть будь яку, але логічну.
// Створити дочірній клас Dog від Animal та в ньому додати 3 індивідуальні властивості для собак. І 2 індивідуальні методи.
// Створити дочірній клас Cat від Animal та в ньому додати 3 індивідуальні властивості для котів. І 2 індивідуальні методи.
// Створити об'єкти до Dog та Cat та попрактикуватись із методами.

class Animals {
    constructor(animal, color, name, speed, harchi) {
    this.animal = animal;
    this.color = color;
    this.name = name;
    this.speed = speed;
    this.harchi = harchi;
}
    sayHello() {
        console.log(`The animal name is ${this.name}`);
        console.log(`The color is ${this.color}`);
        console.log(`The type of animal: ${this.animal}`);
    };
    run() {
        console.log(`The animal speed is ${this.speed}`);
    };
    eat() {
        console.log(`The animal eat is ${this.harchi}`);
        
    }
}

const animalCat = new Animals ("Cat", "Grey", "Barsik", "15 km\h", "Milk");
const animalDog = new Animals ("Dog", "Black", "Sirko", "25 km\h", "Meat");

animalCat.sayHello();
animalCat.run();
animalCat.eat();
console.log("-------------")
animalDog.sayHello();
animalDog.run();
animalDog.eat();
// animalCat.name = "Barsik";
// animalCat.type = "Cat";
// animalCat.color = "Black";
// animalCat.years = 2020;
// animalCat.poroda = "Sfinks";
// animalCat.speed = "15 km\h",

// console.log(animalCat);
// animalCat.sayHello();
// animalCat.run();
// console.log("---------------")

// const animalDog = Object.create(Animals);
// animalDog.name = "Sirko";
// animalDog.type = "Dog";
// animalDog.color = "Grey";
// animalDog.years = 2021;
// animalDog.sexo = "suka";
// animalDog.hunter = "Yes";
// animalDog.speed = "35 km\h";

// console.log(animalDog);
// animalDog.sayHello();
// animalDog.run();
