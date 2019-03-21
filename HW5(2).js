let titles = ['Продукт', 'Цена', 'Кол-во', ''];
let basket = [];
createTable();
let button = document.querySelector('button');
button.addEventListener('click', newProduct);

function createTable() {
  let table = document.createElement('table');
  let tr = document.createElement('tr');
  for (i = 0; i < titles.length; i++) {
    let th = document.createElement('th');
    th.textContent = titles[i];
    tr.appendChild(th);
  }
  table.appendChild(tr);
  if (basket.length !== 0) {
    
    for (i = 0; i < basket.length; i++) {
      let productValue = Object.values(basket[i]);
      let tr = createRow('td', productValue, basket[i].name);
      table.appendChild(tr);
    }
  }
  else {
    let h2 = document.createElement('h2');
    h2.textContent = 'Корзина пуста';
    document.body.appendChild(h2);
  }
  document.body.appendChild(table);
}

function newProduct() {
  let productName = prompt('Введите название продукта');
  let productPrice = +prompt('Введите цену продукта');
  let productCount = +prompt('Введите кол-во продукта (без шт.)')
  let product = {
    name: productName,
    price: productPrice,
    count: productCount,
    del: true,
  };
  basket.push(product);

  renderTable(product);
}

function renderTable(product) {
  let table = document.querySelector('table')
  let productValue = Object.values(product);
  let tr = createRow('td', productValue, product.name)
  table.appendChild(tr);
  let h2 = document.querySelector('h2');
  if (h2) {
    h2.remove();
  }
  renderStatusBasket(basket);
}

function createRow(nodeName, arrayValue, productName) {
  let tr = document.createElement('tr');
  for (j = 0; j < arrayValue.length; j++) {
    let td = document.createElement(nodeName);
    if(arrayValue[j] === true) {
      let button = document.createElement('button');
      button.setAttribute('data-name', productName);
      button.textContent = 'Удалить товар';
      td.appendChild(button);
      button.addEventListener('click', productDelete);
    }else {
      td.textContent = arrayValue[j]
    }
    tr.appendChild(td);
  }
  return tr;
}

function renderStatusBasket(basket) {
  let totalPrice = 0;
  let totalCount = 0;
  for(i = 0; i < basket.length; i++) {
    totalPrice += basket[i].price * basket[i].count;
    totalCount += basket[i].count;
  }
  let prevBasketStatus = document.querySelector('p');
  if (prevBasketStatus) {
    prevBasketStatus.remove();
  }
  let totalBasketStatus = document.createElement('p');
  if(totalCount >= 100) {
    totalBasketStatus.classList.add('basketstatus_warning');
  }else {
    totalBasketStatus.classList.add('basketstatus');
  }
  totalBasketStatus.textContent = `В	корзине: ${totalCount} товаров	на	сумму	${totalPrice} рублей`;
  document.body.appendChild(totalBasketStatus);
}

function productDelete(event) {
  let name = event.target.getAttribute('data-name');
  for (i = 0; i < basket.length; i++) {
    if (basket[i].name === name) {
      basket.splice(i, 1);
    }
  }
  let prevBasket = document.querySelector('table');
  if (prevBasket) {
    prevBasket.remove();
  }
  createTable()
}