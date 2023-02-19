let a = 20;
alert(a)

let year = 2007;
alert(year)

let userName = "Брендан";
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
alert('Привет ' + myName + '!')