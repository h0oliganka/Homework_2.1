let А = 10;
alert(А)
А = 20;
alert(А)

const year = 2007;
alert(year)

const userName = "Брендан";
alert(userName)

let number = 10;
let numberTwo = 2;

alert(number + numberTwo)
alert(number - numberTwo)
alert(number * numberTwo)
alert(number / numberTwo)

let result = numberTwo ** 5;
alert(result)

let A = 9;
let B = 2;
alert(A % B)

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num += 1;
num -= 1;
alert(num)

let age = prompt("Сколько вам лет?")
alert(age)

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

let myName = prompt("Как вас зовут?")
alert(`Привет ${myName} !`)

let password = 'пароль';
let question = prompt('Введите пароль')

if (question === password) {
    alert('Пароль введен верно')
} else {
    alert('Пароль введен неправильно')
}


const c = 2;

if (c > 0 && c < 10) {
    alert('верно');
} else {
    alert('неверно');
}

let d = 99;
let e = 101;

if (d > 100 || e > 100) {
    console.log('верно');
} else {
    console.log('неверно');
}

let a = 2;
let b = 3;
alert(a + b);

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