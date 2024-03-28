// Напишіть функцію, яка приймає як параметри два числа та рядок operator(+,-,/,*).
// Поверніть результат операції. За допомогою if-else зробіть перевірки на корректність передаваємих даних та викидайте помилку(throw new Error() ), якщо дані невірні:

// Якщо операція ділення("/"), то другий параметр не може бути 0
// Для всіх операцій перший та другий параметр повинні бути числами
// Третій параметр повинен бути рядком та дорівнювати одному із 4 значень : +-/*
// Кількість аргументів не повинна бути більше 3-х
// Інші перевірки по бажанню
// Приклад використання:

// Виклик функції:
// calculate(100,5,"*");
// Вивід:
// 100 помножити на 5 = 500
// ______
// Виклик функції:
// calculate(100,5,"string");
// Вивід:
// Error: Третій параметр повинен бути +,-,/ або *
// ______
// Виклик функції:
// calculate(10,0,"/");
// Вивід:
// Error: Коли операція ділення, другий параметр повинен не дорівнювати 0

// function add(num1, num2) {                                            // Це мiй витвiр
//     return (console.log(`Adds is ${num1 * num2}`),
//            console.log(`Delete is ${num1 / num2}`),
//            console.log(`Sum is ${num1 + num2}`),
//            console.log(`Minus is ${num1 - num2}`))
// }
// add(100, 5);
function calc(num1, num2, operator) {                                                  // тут помiч друга
    if (arguments.length !== 3) {console.log("Error arguments must has a 3")}           
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {console.log("Error num1 and num2 is a number")}
    if (typeof operator !== 'string' || !['+', '-', '*', '/'].includes(operator)) {console.log("Error 3-rd parament is symbol '+','-','*','/'")}
    if (operator === '/' && num2 === 0) {console.log("Error 2-rd operator isn`t '0'")}     
    
    let result;
    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === '/') {
        result = num1 / num2;    
    } else if (operator === '*') {
            result = num1 * num2;
        }
    return result;
}
console.log('The add is:', calc(100,5, "*"));
console.log('The delete is:', calc(100,5, "/"));
console.log('The sum is:', calc(100,5, "+"));
console.log('The minus is:', calc(100,5, "-"));