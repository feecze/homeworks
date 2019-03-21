let a = +prompt('введите первое число');
let b = +prompt('введите второе число');
let result;
if (a >= 0 && b >= 0) {
	result = a - b
}else if (a < 0 && b < 0){
	result = a * b
}else {
	result = a + b
}
alert(result);

let a = +prompt('введите первое число');
let b = +prompt('введите второе число');
let result;
function add(a, b) {
result = a + b
return result
}
function sub(a, b){
	result = a - b
	return result
}
function mul(a, b){
	result = a * b
	return result
}
function div(a, b){
	result = a - b
	return result
}
alert(mul(a, b))

let arg1 = +prompt('ВВедите первое число');
let arg2 = +prompt('ВВедите второе число');
let operation = prompt('ВВедите операцию(add, sub, mul, div)');
function mathOperation(arg1, arg2, operation)
switch (operation) {
case add
	add(a, b)
	break
case sub
	sub(a, b)
	break
case mul
	mul(a, b)
	break
case div
	div(a, b)
	break
	default:
	alert('Введите операцию!!!')
}
alert(result)
