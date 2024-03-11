// Є рядок email із ємейлом користувача

// string email = "daniel.abrams@gmail.com"
// За допомогою .split() розбийте його на дві частини по символу '@'. Запишіть вихідний масив у нову змінну.

// новий масив буде ['daniel.abrams', 'gmail.com']
// За допомогою .splice() треба замінити домен пошти(те що після @, тобто другий елемент масиву із індексом 1) на 'changed.com'.

// За допомогою .join() конвертуйте масив із зміненим ємейлом до рядка додав символ '@' між двома елементами масиву, виведіть цей рядок. 
// daniel.abrams@changed.com

const string_email = "daniel.abrams@gmail.com"
const mail = string_email.split("@")             // Mail separated for Math
console.log(mail)

// const index = mail.indexOf('gmail.com')
// console.log(index)

const mail1 = mail.splice(1, 2)                   // Changed second element in Math 
const domen1 = mail
const domen3 = mail.concat(['changed.com'])
console.log(domen3)

const mail2 = domen3.join("@")                    //Compare Math with symbol "@"
console.log(mail2)