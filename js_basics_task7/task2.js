// Створити 2 об'єкти через new Object();, до кожного об'єкту додати як мінімум 3 властивості та 1 метод.

// Приклади об'єктів: person, car, book, phone, city, building etc...

function motoObject(brand, year, costs) {
    this.brand = brand;
    this.year = year;
    this.costs = costs;
    }
     let moto2 = new motoObject("Kawasaki", 2015, 7500);
    console.log(moto2);

function phoneObject(make, model, garanty) {
    this.make = make;
    this.model = model;
    this.garanty = garanty;
    }
    let newPhone = new phoneObject("Sony", "XR", 2);
    console.log(newPhone);