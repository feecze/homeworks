let tc = prompt('введите температуру в градусах по целсию');
let tf = (9/5) * tc + 32;
alert(tf);

let admin;
let name = "Василий";
admin = name;
console.log(admin);

console.log(10 + 10 + '10');
// При сложении переменных number и string получается string

console.log(10 + "10" + 10);
// При сложении переменных number и string получается string

console.log(10 + 10 + +'10');
// Оператор + перед строкой приводит string к number

console.log(10/-"");
// Минус перед пустой строкой даёт -0

console.log(10/+'2.5');
// Оператор + перед строкой приводит string к number

let mode = 'normal';
// Нормально

let my_valu3 = 102;
//Нормально

let 3my_value3 = 102
//Ненормалтно, так как цифра в начале

let _hello_ = 'hello';
//Нормально

let $$$ = "money"
//Нормально

let !0_world = true
//Восклицательный знак инвертирует и получается переменная начинается с цифры

let name2 = prompt('Как вас зовут?');
alert('Здравствуйте,' + name2 +'!');
