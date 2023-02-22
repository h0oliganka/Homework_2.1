//задание 1 (2.2)
let А = 10;
alert(А)
А = 20;
alert(А)

//задание 2 (2.2)
const year = 2007;
alert(year)

//задание 3 (2.2)
const userName = "Брендан";
alert(userName)

//задание 4 (2.2)
let number = 10;
let numberTwo = 2;
alert(number + numberTwo)
alert(number - numberTwo)
alert(number * numberTwo)
alert(number / numberTwo)

//задание 5 (2.2)
let result = numberTwo ** 5;
alert(result)

//задание 6 (2.2)
let A = 9;
let B = 2;
alert(A % B)

//задание 7 (2.2)
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num += 1;
num -= 1;
alert(num)

//задание 8 (2.2)
let age = prompt("Сколько вам лет?")
alert(age)

//задание 9 (2.2)
const user = {
    name: "Daria",
    age: 20,
    isAdmin: true,
}
user['city of residence'] = 'Moscow';
user.age = 22;
delete user['cityOfResidence'];
let info = prompt("Какую информацию хотите узнать о пользователе?", "name", "age", "isAdmin");
console.log(user.name); //'Daria'
console.log(user.age); //22
console.log(user.isAdmin); //'true'
console.log(user[info]);
alert(user[info])

//задание 10 (2.2)
let myName = prompt("Как вас зовут?")
alert(`Привет ${myName} !`)

//задание 1 (2.3)
let password = 'пароль';
let question = prompt('Введите пароль')
if (question === password) {
    alert('Пароль введен верно')
} else {
    alert('Пароль введен неправильно')
}

//задание 2 (2.3)
const c = 2;
if (c > 0 && c < 10) {
    alert('верно');
} else {
    alert('неверно');
}

//задание 3 (2.3)
let d = 99;
let e = 101;
if (d > 100 || e > 100) {
    console.log('верно');
} else {
    console.log('неверно');
}

//задание 4 (2.3)
let a = 2;
let b = 3;
alert(a + b);

//задание 5 (2.3)
let month = Number(prompt('Введите номер месяца'));
switch (month) {
    case 12:
        console.log('зима');
        break;
    case 1:
        console.log('зима');
        break;
    case 2:
        console.log('зима');
        break;
    case 3:
        console.log('весна');
        break;
    case 4:
        console.log('весна');
        break;
    case 5:
        console.log('весна');
        break;
    case 6:
        console.log('лето');
        break;
    case 7:
        console.log('лето');
        break;
    case 8:
        console.log('лето');
        break;
    case 9:
        console.log('осень');
        break;
    case 10:
        console.log('осень');
        break;
    case 11:
        console.log('осень');
        break;
    default:
        console.log('такого месяца нет');
}