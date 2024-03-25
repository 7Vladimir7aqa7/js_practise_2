// Напишіть функцію, яка приймає масив чисел в якості аргументу і повертає новий масив, в якому кожен елемент буде піднесений до квадрата.

// function squareCalculate (num1, num2, num3, num4, num4, num5, num6, num7) {
//     console.log(`'Sqaure is:', ${num1 * num1}, ${num2 * num2}, ${num3 * num3}, ${num4 * num4}, ${num5 * num5}, ${num6 * num6}, ${num7 * num7}` )

// let Sum = [1,2,3,4,5,6,7]
// let i
// for (i = 0; i<7; i++) result[i] = num1[i];
// return i * i;
// }

// squareCalculate()

// const square = function (x) {
//     //let x = [1,2,3,4,5,6,7]
//     return x * x;
// };

// //console.log(square)
// console.log(square(7))

function squareArray(arr) {
  return arr.map((num) => num * num);
}
let nums = [1, 2, 3, 4, 5, 6, 7];
let squareTotal = squareArray(nums);

console.log("Square is: ", squareTotal);

// let total = squareArray(array)
// console.log(total());
//  let square = (set)  {
//     if (set > 0 & set < 8)
//     return set * set
//  } else {
//     console.log("All")
//  }
