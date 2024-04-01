// По можливості кожен клас створювати в окремому файлі, і створити окремий файл для створення всіх об'єктів та роботи з ними.

// Створити клас Animal. Додати до нього властивості color, name, type. Та методи sayHello та run. Реалізацію методів зробіть будь яку, але логічну.
// Створити дочірній клас Dog від Animal та в ньому додати 3 індивідуальні властивості для собак. І 2 індивідуальні методи.
// Створити дочірній клас Cat від Animal та в ньому додати 3 індивідуальні властивості для котів. І 2 індивідуальні методи.
// Створити об'єкти до Dog та Cat та попрактикуватись із методами.

let Animal = {
    type: "animal",
    color: "color",
    name: "name",
    speed: "speed",
    sayHello: function () {
        console.log(`The animal name is ${this.name}`),
        console.log(`The color is ${this.color}`),
        console.log(`The type of animal: ${this.type}`)
    },
    run: function () {
        console.log(`The animal speed is ${this.speed}`)
    }
}

let animalCat = Object.create(Animal);
animalCat.name = "Barsik";
animalCat.type = "Cat";
animalCat.color = "Black";
animalCat.years = 2020;
animalCat.poroda = "Sfinks";
animalCat.speed = "15 km\h",

console.log(animalCat);
animalCat.sayHello();
animalCat.run();
console.log("---------------")

let animalDog = Object.create(Animal);
animalDog.name = "Sirko";
animalDog.type = "Dog";
animalDog.color = "Grey";
animalDog.years = 2021;
animalDog.sexo = "suka";
animalDog.hunter = "Yes";
animalDog.speed = "35 km\h";

console.log(animalDog);
animalDog.sayHello();
animalDog.run();
