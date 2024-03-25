// Напишіть функцію, яка приймає 3 параметри-оцінки: математика, література, фізика. Кожен від 1 до 100.

// В функції порахуйте середній бал і поверніть(return) наступний рядок в залежності від середнього балу:

// 1-49 - Low performance
// 50-69 - Medium performance
// 70-89 - Good performance
// 90-100 - Very good perfomance

function calculatePerformance(math, literature, physics) {
    const average = (math + literature + physics) / 3;

    if (average >= 1 && average <= 49) {
        return "Low performance";
    } else if (average >= 50 && average <= 69) {
        return "Medium performance";
    } else if (average >= 70 && average <= 89) {
        return "Good performance";
    } else if (average >= 90 && average <= 100) {
        return "Very good performance";
    } else {
        return "Invalid input or out of range";
    }
}

const mathGrade = 80;
const literatureGrade = 75;
const physicsGrade = 85;

const performance = calculatePerformance(mathGrade, literatureGrade, physicsGrade);
console.log("Student Name:", performance);