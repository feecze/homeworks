let a = [
  [
    {name: 'Mary', age: 23},
    {name: 'Mike', age: 45},
    {name: 'Nick', age: 11}
],
  [
    {name: 'Adam', age: 56},
    {name: 'Sara', age: 21},
    {name: 'Don', age: 22}
],
  [
    {name: 'Karl', age: 34},
    {name: 'Marta', age: 76},
    {name: 'John', age: 19}
]
];
let b = [];
for (let i = 0; i < a.length; i++) {
  b[i] = []
  for (let j = 0; j < a[i].length; j++) {
    b[i][j] = Object.assign({}, a[i][j])
  }
}
a[1][0].name = 'Arnold'
console.log(b);
console.log(a); 

  
let basket = [
  [
    {name: 'computer', price: 15},
    {name: 'socks', price: 2},
    {name: 'teapot', price: 6}
  ],
  [
    {name: 'iphone', price: 50},
    {name: 'android', price: 20},
    {name: 'flowers', price: 3}
  ],
  [
    {name: 'pizza', price: 2},
    {name: 'tea', price: 1},
    {name: 'cheese', price: 3}
  ]
];
function countBasketPrice(basket) {
  let price = 0;
    for (let array of basket) {
      for (let item of array) {
        price += item.price
      }
    }
    alert(price)
};
countBasketPrice(basket);


for (let i = 0; i <= 9;console.log(i), i++) {};


for (let i = 0; i < 20; i++) {
    drawStars(i);
}
function drawStars(numberStarsInLine) {
    let stars = '';
    for (let i = 0; i <= numberStarsInLine; i++ ) {
      stars += '*'
    }  
    console.log(stars);
  };

