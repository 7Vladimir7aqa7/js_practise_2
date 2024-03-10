// Є масив рядків

// const strings = ["String one", "String two", "string three"]
// За допомогою циклу for of пройтись по всім елементам та вивести у консоль всі рядки великими буквами. Приклад:

// STRING ONE
// STRING TWO
// STRING THREE

const strings = ["String one", "String two", "string three"]
const string1 = []


for(const string of strings) {
    string1.push(string.toUpperCase())
}
console.log(string1[string1.length-3]);


for(const string of strings) {
    string1.push(string.toUpperCase())
}
console.log(string1[string1.length-2]);


for(const string of strings) {
    string1.push(string.toUpperCase())
}
console.log(string1[string1.length-1]);