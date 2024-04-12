// Створіть функцію, яка приймає рядок тексту та кількість секунд, а також колбек-функцію(яку ми створили у файлі task1.js - тобто імпортуємо її).

import { text } from "./task1.js";

// Ця функція повинна викликати колбек через передану кількість секунд і передати в нього переданий текст як аргумент. 

function myCallback(text) {
    console.log(`emaple with: ${text}`);
}

myCallback("Hello", 7, "test");


// import { text } from "./task1.js";

// function text1("sometext", 5, callback(text))

// text1("Hello", 10, callback: 10);
