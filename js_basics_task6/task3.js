// Напишіть функцію, яка приймає масив чисел в якості аргументу і повертає суму всіх чисел у масиві.


function sumy(...numbers) {
   
return numbers.reduce((sum, num) => sum + num, 0);  
}

console.log('The sum is: ', sumy(1, 2, 3, 4, 5, 6, 7)); 

