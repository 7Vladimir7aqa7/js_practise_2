// // Використовуючи рекурсію, напишіть функцію, яка приймає два параметри - start та finish. За допомогою рекурсії, виведіть всі числа від start до finish.

// // Приклад використання:

// // printIntervalRec(10,15);
// // Результат:
// // 10
// // 11
// // 12
// // 13
// // 14
// // 15

// function countToFift(startValue) {
//     for (let i = startValue; i <= 15; i++) {
//         console.log(i);
//     }
// }

// countToFift(10) 

function countToFiftRecursion(startValue) {

if (startValue <= 15) {
    console.log(startValue);
    startValue++;
    countToFiftRecursion(startValue)
}
}
countToFiftRecursion(10)