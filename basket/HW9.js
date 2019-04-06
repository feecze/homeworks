let products = [
    {
        name: 'avocado',
        price: 100,
        description: 'tasty and healthy'
    },
    {
        name: 'chips',
        price: 25,
        description: 'tasty and unhealthy'
    },
    {
        name: 'water',
        price: 10,
        description: 'tasty and very healthy'
    },
    {
        name: 'cola',
        price: 40,
        description: 'tasty and very unhealthy'
    },
];

let basket = [];

function renderProducts(products) {
    let list = document.querySelector('.container .products_list');
    for (i = 0; i < products.length; i++) {
        let li = document.createElement('li');
        li.classList.add('product_card');
        
        let name = document.createElement('p');
        name.textContent = products[i].name;
        li.appendChild(name);

        let price = document.createElement('p');
        price.textContent = products[i].price;
        li.appendChild(price);

        let description = document.createElement('p');
        description.textContent = products[i].description;
        li.appendChild(description);

        list.appendChild(li);
    }

};

renderProducts(products)