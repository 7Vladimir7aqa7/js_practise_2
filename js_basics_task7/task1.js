// Створити 3 об'єкти через {}, кожен об'єкт повинен мати як мінімум 3 властивості і 2 методи.

// Приклади об'єктів: person, car, book, phone, city, building etc...

let person = {
    name: "Vasyl",
    age: 40,
    gender: "male",
    sayMe: function() {
        console.log(`My name is ${this.name}`)
        console.log(`I am ${this.age} years`)
    }
}
person.sayMe();
//console.log(person)
console.log('-------------------------')

let cars = {
    make: "Lada",
    model: 2108,
    year: 1992,
    color: "red",
    bestseller2() {
        console.log(`The make of year is ${this.make}`)
        console.log(`The most chose color people is ${this.color}`)
    }
}
cars.bestseller2();
//console.log(cars)
console.log('-------------------------')

let book = {
    author: "Tven",
    year: 1954,
    strings: 350,
    mostPopular() {
        console.log(`This author is popular ${this.author}`)
        console.log(`This year most popular ${this.year}`)
    }
}
book.mostPopular()
//console.log(book)
