// Створіть програму, яка приймає рядок від користувача (як змінну) та замінює всі голосні літери на "*" у цьому рядку. Виведіть отриманий рядок(із змінами) у консоль.

let userInput = 'New string'
let newstr = ""
let words ="ei"

for(let i = 0; i < userInput.length; i++) {
    let currentChar = userInput[i];
    if (currentChar === 'e' || currentChar === 'i')
    {newstr += '*';
    } else {newstr += userInput[i];}
}
console.log(`Old string "${userInput}", new string "${newstr}"`);
