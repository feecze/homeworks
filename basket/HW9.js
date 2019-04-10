class Shop {
    constructor(products) {
        this.products = products;
        this.init();
    }

    init() {
        let newProduct = document.querySelector('.show_modal');
        newProduct.addEventListener('click', this.toggleModal);
        let saveProduct = document.querySelector('.add_product');
        saveProduct.addEventListener('click', this.createProduct);
        let showBasket = document.querySelector('.header_basket');
        showBasket.addEventListener('click', this.toggleProducts);
    }
    products = [];
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
        modal.classList.toggle('open');
    };

    cleanContent() {
        let ul = document.querySelector('.products_list');
        for(let i = ul.childNodes.length - 1; i >= 0; i--) {
            ul.childNodes[i].remove();
        }
    }

    createProduct = (event) => {
        let modal = event.target.parentElement;
        let inputs = modal.querySelectorAll('input');
        let product = {};
        inputs.forEach((input) => {
            let value = input.value;
            input.value = '';
            let type = input.dataset.type;
            product[type] = value;
        });
        this.addProducts(product);
        this.cleanContent();
        this.renderProducts();
    }

    toggleProducts = () => {
        let products = document.querySelector('.show_basket');
        products.classList.toggle('open');
        this.renderBasket();
    };

    calcTotalPrice() {
        let totalPrice = 0;
        this.basket.forEach((product) => {
            totalPrice += product.price;
        });
        return totalPrice;
    };

    calcTotalCount() {
        return this.basket.length;
    };

    renderBasket() {
        let totalPrice = document.querySelector('.total_price');
        totalPrice.textContent = this.calcTotalPrice();
        let totalCount = document.querySelector('.num_of_goods');
        totalCount.textContent = this.calcTotalCount();
    }
}
productsDB = [
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
let shop = new Shop(productsDB);

shop.renderProducts();