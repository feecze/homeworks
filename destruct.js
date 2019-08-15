let user = {
  name: {
    firstName: 'Anton',
    lastName: 'Kekov'
  },

  auth: {
    login: 'KekovAnton337',
    password: 'AntonKekov@'
  },

  adress: {
    home: {
      city: 'Moscow',
      street: 'Tverskaya',
      metro: 'Tverskaya'
    },

    work: {
      city: 'Moscow',
      street: 'Domodedovskaya',
      metro: 'Orehovo'
    }
  }
}

let {adress:{work:{metro}}} = user;
let {auth:{password}} = user;
let {adress:{home:{street}}} = user;
let {name:{firstName, lastName}} = user;

let array = [
  125, 
  {
    a: 1,
    b: 2
  }, 

  [
    333
  ]
]

let [number] = array;
let [numberAgain, letters] = array;
let [againNumber, {b}] = array;
let [_, __, [name]] = array;