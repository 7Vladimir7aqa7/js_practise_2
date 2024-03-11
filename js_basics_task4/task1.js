// Є масив чисел

// const numbers = [5, -4, 0, 6, 7, -1, 0, 0]
// Використовуючи звичайний цикл for, порахуйте кількість позитивних та негативних чисел та нулів. Приклад результату:

// Positive numbers:3
// Negative numbers:2
// Zeros:3

const numbers = [5, -4, 0, 6, 7, -1, 0, 0];
let posCount = 0;
let negCount = 0;
let zeroCount = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    posCount++;
  } else if (numbers[i] < 0) {
    negCount++;
  } else {
    zeroCount++;
  }
}

console.log('Positive numbers:', posCount);
console.log('Negative numbers:', negCount);
console.log('Zeros:', zeroCount);