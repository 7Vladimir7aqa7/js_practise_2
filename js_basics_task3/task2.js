// Створіть програму, яка приймає такі змінні: базовий рядок та символ, який потрібно замінити(як змінні), а потім замінює вказаний символ у базовому рядку на "*" та записує у новий рядок, який потім виводить у консоль.

let text = 'Home task'
let tochange = 'H'
let newstr = ""
for (let i = 0; i < text.length; i++) {
    if (text[i] ===tochange) 
    {newstr += "*";
} else { newstr += text[i];}
} 
console.log(`Old text "${text}", new text "${newstr}"`)