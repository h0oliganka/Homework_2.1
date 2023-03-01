// Задание 1 (2.5)
function min(r, t) {
    if (r < t) {
        return t;
    } else {
        return r;
    }
}

min(8, 4)
min(6, 6)

// Задание 2 (2.5)
function numbers(number) {
    return number % 2 === 0 ? true : false
}
console.log(numbers(1));
console.log(numbers(2));

// Задание 3 (2.5)
// 3.1
function square() {
    let N = Number(prompt(`Ведите число`));

    return N * N;
}

console.log(square());

// 3.2
function square() {
    let M = Number(prompt(`Ведите число`));

    return M * M;
}

// Задание 4 (2.5)
"use strict";
let ages = prompt("Сколько Вам лет?");

if (ages < 0) {

    function printMessage() {
        console.log("Вы ввели неправильное значение");
    }
}
else if (ages < 13) {

    function printMessage() {
        console.log("Привет, друг!");
    }
}

else if (ages > 12) {

    function printMessage() {
        console.log("Добро пожаловать!");
    }

}


printMessage();

// Задание 5 (2.5)
let num3 = prompt(`Ведите первое число`);
let num4 = prompt(`Ведите второе число`);

multipleNum(num3, num4)
function multipleNum(B, Z) {
    checkNum(B) && checkNum(Z) ? alert(B * Z) : alert("Одно или оба значения не являются числом.");
}
function checkNum(num) {
    if (!isNaN(num) && num !== '' && num !== null) return true;
    return false;
}
multipleNum();
checkNum();



// Задание 6 (2.5)
let j = prompt(`Ведите число`);
let str;

function cubingNum(num) {
    checkNum(num) ? alert(`${num} в кубе равняется ${num ** 3}`) : alert('Переданный параметр не является числом');
}
cubingNum(j);

// Задание 7 (2.5)
function showTextButton() {

    if (month === 12 || month == 1 || month == 2) {
        alert('Зима');
    } else if (month === 3 || month == 4 || month == 5 || !isNaN(month)); {
        alert('Весна');
    } else if (month === 6 || month == 7 || month == 8 || !isNaN(month)); {
        alert('Лето');
    } else if (month === 9 || month == 10 || month == 11 || !isNaN(month)); {
        alert('Осень');
    } else if (month <= 0 || !isNaN(month) || month > 12 || !isNaN(month)); {
        alert('Такого месяца не существует');
    }
}