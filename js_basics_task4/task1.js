// Є масив чисел 

// const numbers = [5, -4, 0, 6, 7, -1, 0, 0]
// Використовуючи звичайний цикл for, порахуйте кількість позитивних та негативних чисел та нулів. Приклад результату:

// Positive numbers:3
// Negative numbers:2
// Zeros:3

let Positive = []
let Negative = []
let Zeros = []
const numbers = [5, -4, 0, 6, 7, -1, 0, 0] 

for (let i = 0; i < numbers.lenght; i++) {
    if (typeof numbers[i] > 0) 
    {    Positive[Positive.lenght] = numbers[i];
    // if (i > 0) console.log('i > 0')
    // if (numbers < 0) console.log(numbers < 0)
    // if (numbers = 0) console.log(0)
} 
} 
console.log(Positive)
//const numbers2 = new array()
//console.log(numbers[numbers.length-1])