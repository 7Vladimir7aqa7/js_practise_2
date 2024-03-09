// // Створіть програму, яка приймає дві змінні(числа) і виводить список парних чисел, які знаходяться між ними.

// // Підказка для імплементації: Спочатку треба вирахувати, яке з двох чисел більше, а яке менше, щоб встановити межи циклу. 
// Для цього можна використовувати Math.min(number1, number2) та Math.max(number1,number2)

let number1 = 1
let number2 = 10 

let first = Math.min(number1, number2)
let second = Math.max(number1, number2)

for (let i = first; i < second; i++) {
    if (i % 2 == 0)
console.log(i)
}

