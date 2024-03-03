// Базова вартість автомобілю - 10.000, всі додаткові надбавки потрібно додати до базової вартості.

// Якщо рік випуску автомобіля від 2019 до 2022 (включно), вартість збільшується на 10%.
// Якщо автомобіль з пробігом, пробіг від 50 000 км до 100 000 км (включно), вартість зменшується на 5%.
// Якщо автомобіль має клімат-контроль, вартість збільшується на 7%.
// Якщо користувач обирає автомобіль з додатковим пакетом безпеки, вартість збільшується на 8%.
// Якщо автомобіль є електричним, вартість збільшується на 15%.

let price = 10000
let year = 2022
let ClimateControl = true
let Odometer = 50000
let save = true
let electricity = true

if (year>2019 && year <=2022) {console.log(price + ((price/100)*10)), console.log('Price with year')}   

if (Odometer>=50000 && Odometer<=100000) {console.log((price/100)*95), console.log('Price with Odometr')} 

if (ClimateControl=true) {console.log(price + ((price/100)*7)), console.log('Price with ClimatControl')}

if (save=true) {console.log(price + ((price/100)*8)), console.log('Price with save')}

if (electricity=true) {console.log(price + ((price/100)*15)), console.log('Price with electricity')}

console.log(price + ((price/100)*35), 'Price with all additional options')