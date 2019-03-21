window.onload = registration;

function registration() {
    let form = document.querySelector('form');
    form.addEventListener('submit', handler);
}

function handler(event) {
    const rules = {
        login: {
            min: 1,
            max: 10,
        },
        password: {
            min: 5,
            max: 10,
        },
        accept_password: {
            min: 5,
            max: 10,
        }
    }

    event.preventDefault();
    let inputs = document.querySelectorAll('input');
    for (i = 0; i < inputs.length; i++) {
        let node = inputs[i];
        let value = node.value;
        if (value.length < rules[node.className].min || value.length >= rules[node.className].max) {
            addClass(node);
        }
        rules[node.className].value = value;
    }
    if(rules.password.value !== rules.accept_password.value) {
        let acceptedPassword = document.querySelector('.accept_password');
        addClass(acceptedPassword);
    }
}

function addClass(node) {
    node.parentNode.nextElementSibling.classList.add('error');
}