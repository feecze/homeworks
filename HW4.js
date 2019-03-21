let number = +prompt('Введите число от 0 до 999');
numberToObject(number);
function numberToObject(number) {
    let obj = {};
    if (number > 999 || number < 0) {
        alert('Ошибка вы ввели некорректное число');
        return obj;
    }else {
        let units = number % 10;
        if (number >= 100) {
            let tens = getTrunc(number, 10);
            obj = {
                hundreds: getTrunc(number, 100),
                tens: tens % 10,
                units, // запись вместо units: units,
            }
        }else if (number >= 10) {
            obj = {
                tens,
                units, // запись вместо units: units,
            }
        }else {
            obj = {
                units, // запись вместо units: units,
            }
        }
    }
console.log(obj);
}
function getTrunc(number, bit) {
    let result = Math.trunc(number / bit);
    return result;
}

let basket ={
    goodList: [],
    countTotalPrice() {
        let price = 0;
        for (let item of this.goodList) {
            price += item.price * item.count
        }
        return price;
    },
    countTotalNumber() {
        let quantity = 0;
        for (let j = 0; j < basket.goodList.length; j++){
            quantity += basket.goodList[j].count;
        }
        return quantity;
    }
}
let Good = {
    name: '',
    price: 0,
    putToBasket(product) {
        basket.goodList.push(product);
        for (let i = 0; i < basket.goodList.length; i++) {
            if (i % 2 === 0) {
                basket.goodList[i].count = 1;
            }else {
                basket.goodList[i].count = 2;
            }
        }
    }
}
let product1 = {
    name: 'teapot',
    price: 234,
    count: 0
};
let product2 = {
    name: 'socks',
    price: 11,
    count: 0
};
let product3 = {
    name: 'chips',
    price: 12,
    count: 0
};
Good.putToBasket(product1);
Good.putToBasket(product2);
Good.putToBasket(product3);
console.log(basket.countTotalNumber());
console.log(basket.countTotalPrice());