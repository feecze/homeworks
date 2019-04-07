class Shop {
    constructor() {
        this.init();
    }

    init() {
        let newProduct = document.querySelector('.show_modal');
        newProduct.addEventListener('click', this.toggleModal);
    }
    products = [
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

    basket = [];

    renderProducts() {
        let list = document.querySelector('.container .products_list');
        for (let i = 0; i < this.products.length; i++) {
            let li = document.createElement('li');
            li.classList.add('product_card');
            
            let name = document.createElement('p');
            name.textContent = this.products[i].name;
            li.appendChild(name);
    
            let price = document.createElement('p');
            price.textContent = this.products[i].price;
            li.appendChild(price);
    
            let description = document.createElement('p');
            description.textContent = this.products[i].description;
            li.appendChild(description);
    
            list.appendChild(li);
        }    
    };

    addProducts(product) {
        if(product.name) {
            this.products.push(product);
        }
    };

    toggleModal() {
        let modal = document.querySelector('.modal');
        if(modal.classList.contains('open')) {
            modal.classList.remove('open');
        }else {
            modal.classList.add('open');
        }
    }
}

let shop = new Shop();

shop.renderProducts();