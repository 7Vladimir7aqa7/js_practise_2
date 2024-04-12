// // Створити функцію, яка приймає два параметри - рядок, та кількість секунд.

// // В середині створеної функції, використовуючи SetTimeout(), зробіть так щоб переданий у функцію текст виводився через передану кількість секунд.

// // Щоб можна було ось так викликати функцію:

// // printTextWithDelay("My text", 5);
// // Результат:

// // вивід "My text" через 5 секунд

export function text(text, seconds, callback) {
    
    setTimeout(function() {
        console.log(text);
        if (callback && typeof callback === 'function') {
            callback();
        }    
        }, seconds * 1000);
    }

   function string2(text) {
        console.log(text);
    }

   text("string2", 5, function() {
        console.log("callback after 5 seconds");
    });
 


