// //задание 1 (2.2)
// let А = 10;
// alert(А)
// А = 20;
// alert(А)

// //задание 2 (2.2)
// const year = 2007;
// alert(year)

// //задание 3 (2.2)
// const userName = "Брендан";
// alert(userName)

// //задание 4 (2.2)
// let number = 10;
// let numberTwo = 2;
// alert(number + numberTwo)
// alert(number - numberTwo)
// alert(number * numberTwo)
// alert(number / numberTwo)

// //задание 5 (2.2)
// let result = numberTwo ** 5;
// alert(result)

// //задание 6 (2.2)
// let A = 9;
// let B = 2;
// alert(A % B)

// //задание 7 (2.2)
// let num = 1;
// num += 5;
// num -= 3;
// num *= 7;
// num /= 3;
// num += 1;
// num -= 1;
// alert(num)

// //задание 8 (2.2)
// let age = prompt("Сколько вам лет?")
// alert(age)

// //задание 9 (2.2)
// const user = {
//     name: "Daria",
//     age: 20,
//     isAdmin: true,
// }
// user['city of residence'] = 'Moscow';
// user.age = 22;
// delete user['cityOfResidence'];
// let info = prompt("Какую информацию хотите узнать о пользователе?", "name", "age", "isAdmin");
// console.log(user.name); //'Daria'
// console.log(user.age); //22
// console.log(user.isAdmin); //'true'
// console.log(user[info]);
// alert(user[info])

// //задание 10 (2.2)
// let myName = prompt("Как вас зовут?")
// alert(`Привет ${myName} !`)

// //задание 1 (2.3)
// let password = 'пароль';
// let question = prompt('Введите пароль')
// if (question === password) {
//     alert('Пароль введен верно')
// } else {
//     alert('Пароль введен неправильно')
// }

// //задание 2 (2.3)
// const c = 2;
// if (c > 0 && c < 10) {
//     alert('верно');
// } else {
//     alert('неверно');
// }

// //задание 3 (2.3)
// let d = 99;
// let e = 101;
// if (d > 100 || e > 100) {
//     console.log('верно');
// } else {
//     console.log('неверно');
// }

// //задание 4 (2.3)
// let a = 2;
// let b = 3;
// alert(a + b);

// //задание 5 (2.3)
// let month = Number(prompt('Введите номер месяца'));
// switch (month) {
//     case 12:
//         console.log('зима');
//         break;
//     case 1:
//         console.log('зима');
//         break;
//     case 2:
//         console.log('зима');
//         break;
//     case 3:
//         console.log('весна');
//         break;
//     case 4:
//         console.log('весна');
//         break;
//     case 5:
//         console.log('весна');
//         break;
//     case 6:
//         console.log('лето');
//         break;
//     case 7:
//         console.log('лето');
//         break;
//     case 8:
//         console.log('лето');
//         break;
//     case 9:
//         console.log('осень');
//         break;
//     case 10:
//         console.log('осень');
//         break;
//     case 11:
//         console.log('осень');
//         break;
//     default:
//         console.log('такого месяца нет');
// }

// //Задание 1 (2.4)
// let i = 0;
// while (i < 2) {
//     console.log('Привет');
//     i++;
// }

// //Задание 2 (2.4)
// let q = 1;
// while (q < 6) {
//     console.log(q);
//     q++;
// }

// //Задание 3 (2.4)
// let w = 7;
// while (w < 23) {
//     console.log(w);
//     w++;
// }

// //Задание 4 (2.4)
// let obj = {
//     'Коля': 200,
//     'Вася': 300,
//     'Петя': 400
// }
// for (let key in obj) {
//     alert(key + ' - зарплата ' + obj[key] + ' долларов.');
// }

// //Задание 5 (2.4)
// for (let n = 1000, num = 0; n > 50; num++) {
//     n /= 2;
//     alert(n);
//     //num = 31,25
// }

// //Задание 6 (2.4)
// for (let fri = 3; fri < 24; fri++) {
//     if (fri < 4) {
//         alert('Сегодня пятница, ' + (fri) + '-е число. Необходимо подготовить отчет.');
//     } else if (fri < 5) {
//         alert('Сегодня пятница, ' + (fri + 6) + '-е число. Необходимо подготовить отчет.');
//     } else if (fri < 6) {
//         alert('Сегодня пятница, ' + (fri + 12) + '-е число. Необходимо подготовить отчет.');
//     } else if (fri < 7) {
//         alert('Сегодня пятница, ' + (fri + 18) + '-е число. Необходимо подготовить отчет.');
//     }
// }

// // Задание 1 (2.5)
// function min(r, t) {
//     if (r > t) {
//         return t;
//     } else {
//         return r;
//     }
// }

// min(8, 4)
// min(6, 6)

// // Задание 2 (2.5)
// function numbers(number) {
//     return number % 2 === 0 ? true : false
// }
// console.log(numbers(1));
// console.log(numbers(2));

// // Задание 3 (2.5)
// // 3.1
// function square() {
//     let N = Number(prompt(`Ведите число`));

//     return N * N;
// }
// console.log(square());

// // 3.2
// function square() {
//     let M = Number(prompt(`Ведите число`));

//     return M * M;
// }

// // Задание 4 (2.5)
// let age = prompt("Сколько Вам лет?");
// function printMessage() {
//     if(age < 0) {
//       console.log("Вы ввели неправильное значение");
//     } else if(age < 13) {
//         console.log("Привет, друг!");
//     } else if(age >= 13)
//         console.log("Добро пожаловать!");
//   }

//   printMessage(age);

// // Задание 5 (2.5)
// let num3 = prompt(`Ведите первое число`);
// let num4 = prompt(`Ведите второе число`);

// multipleNum(num3, num4)
// function multipleNum(B, Z) {
//     checkNum(B) && checkNum(Z) ? alert(B * Z) : alert("Одно или оба значения не являются числом.");
// }

// function checkNum(num) {
//     if (!isNaN(num) && num !== '' && num !== null) return true;
//     return false;
// }
// multipleNum();
// checkNum();

// // Задание 6 (2.5)
// let j = prompt(`Ведите число`);
// let str;

// function cubingNum(num) {
//     checkNum(num) ? alert(`${num} в кубе равняется ${num ** 3}`) : alert('Переданный параметр не является числом');
// }
// cubingNum(j);

// // Задание 7 (2.5)
// function showTextButton() {
//     let month = (prompt('Введите номер месяца'))

//     if (month == 12 || month == 1 || month == 2) {
//         alert('Зима');
//     } else if (month == 3 || month == 4 || month == 5 || isNaN(month)) {
//         alert('Весна');
//     } else if (month == 6 || month == 7 || month == 8 || isNaN(month)) {
//         alert('Лето');
//     } else if (month == 9 || month == 10 || month == 11 || isNaN(month)) {
//         alert('Осень');
//     } else if (month <= 0 || month >= 13 || isNaN(month)) {
//         alert('Такого месяца не существует');
//     }
// }

// //Задание 1 (2.6)
// const arr = [1, 5, 4, 10, 0, 3];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == 10) break;
//     console.log(arr[i]);
// }

// //Задание 2 (2.6)
// let arr2 = [1, 5, 4, 10, 0, 3];
// let i = 0, found = false;
// for (let elem of arr2) {
//     if (elem == 4) {
//         found = true;
//         break;
//     }
//     ++i;
// }
// if (!found) i = -1;
// console.log(i);

// //Задание 3 (2.6)
// let arr3 = [1, 3, 5, 10, 20];

// arr3 = arr3.join('')
// console.log(arr3);

// //Задание 4 (2.6)
// let arr4 = [
//     [1, 1, 1],
//     [1, 1, 1],
//     [1, 1, 1]
// ];

// console.log(arr4);

// //Задание 5 (2.6)
// let arr5 = [1, 1, 1]
// arr5.push(2, 2, 2);

// console.log(arr5);

// //Задание 6 (2.6)
// let arr6 = [9, 8, 7, 'a', 6, 5];

// arr6 = arr6.sort();
// arr6.pop();
// console.log(arr6);

// //Задание 7 (2.6)
// const arr7 = [9, 8, 7, 6, 5];

// let numb = prompt('Введите число от 1 до 10');
// let search = arr7.includes(+ numb);

// console.log(search);

// //Задание 8 (2.6)
// let word = 'abcdef';
// let rev = "";
// for (let i = word.length; i > 0; i--) {
//     rev += word[i - 1];
// }
// console.log(rev);

// //Задание 9 (2.6)
// let arr9 = [
//     [1, 2, 3,],
//     [4, 5, 6],
// ]

// const array1 = [1, 2, 3,];
// const array = [4, 5, 6];

// const newArray = array1.concat(array);

// console.log(newArray);

// //Задание 10 (2.6)
// const arrSum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < arrSum.length; i++) {
//     console.log(arrSum[i + 1] + arrSum[i]);
// }

// //Задание 11 (2.6)
// let arr11 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let random = arr11[Math.floor(Math.random() * arr11.length)];
// console.log(random);
// const even = arr11.filter(el => el % 2 === 0);
// console.log(even);

// //Задание 12 (2.6)
// let arr12 = [1, 2, 3, 4, 5, 6];
// let random2 = arr12[Math.floor(Math.random() * arr12.length)];
// console.log(random2);
// const sum = arr12.reduce((a, b) => (a + b)) / arr12.length;
// console.log(sum);

// Задание 1 (2.7)
let str = 'Язык JavaScript';
console.log(str.toUpperCase());

// Задание 2 (2.7)
let resultArray = [];
function searchStart(arr, str) {
    arr.forEach(element => {
        if (element.toLowerCase().startsWith(str.toLowerCase())) {
            resultArray.push(element);
        }
    });
    console.log(resultArray);
}
searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'); //['кошка', 'комар']

// Задание 3 (2.7)
console.log(Math.floor(32.58884)); // 32
console.log(Math.ceil(32.58884)); // 33
console.log(Math.round(32.58884)); // 33

// Задание 4 (2.7)
console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32));

// Задание 5 (2.7)
function getRndInteger() {
    return Math.floor(Math.random() * (10 - 1)) + 1;
}
console.log(getRndInteger());

// Задание 6 (2.7)

function getRandomArrNumbers(randomNumber) {
    let sixthArray = [];
    let arrLength = Math.floor(randomNumber / 2)
    for (let i = 0; i < arrLength; i++) {
        sixthArray.push(Math.round(Math.random() * randomNumber));
    }
    console.log(sixthArray);
}
getRandomArrNumbers(Number(prompt('Введите любое число')));

// Задание 7 (2.7)
let seventhRandomValue = (maxValue, minValue) => {
    let seventhRandomResult = Math.round(Math.random() * (maxValue - minValue) + minValue);
    console.log(seventhRandomResult);
}
seventhRandomValue(Number(prompt('Введите любое число')), Number(prompt('Введите любое число, значение которого меньше, чем у первого числа')));

// Задание 8 (2.7)
console.log(new Date());

// Задание 9 (2.7)
let theBigDay = new Date();
theBigDay.setDate(73);

console.log(theBigDay);

//Задание 10 (2.7)
let date = new Date();

function dataView(date) {
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    let dates = date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear() + " - это " + days[date.getDay()] +" " + date.getHours() + " часов" + " " + date.getMinutes() + " минут" +" " + date.getSeconds()+ " секунд";
    console.log(dates);
}
dataView(date);


// Задание 11 (2.7)
const checkFruits = () => {
  
    let list =['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    list = list.sort(() => Math.random() - 0.5);
    alert(`Запомните порядок элементов ${ list}`);
    
    let userAnswer =(prompt('Чему равнялся первый элемент массива?'));
    let userAnswerTwo = (prompt('Чему равнялся последний элемент массива?'));
    
    if (userAnswer.toLowerCase() == list[0].toLowerCase() && userAnswerTwo.toLowerCase() == list[6].toLowerCase()) {
        alert('Поздравляю, вы угадали оба элемента');
    } else if (userAnswer.toLowerCase() == list[0].toLowerCase() || userAnswerTwo.toLowerCase() == list[6].toLowerCase()) {
        alert('Вы были близки к победе!'); 
    } else {
    alert('Вы не угадали ни одного элемента');
    }
}



