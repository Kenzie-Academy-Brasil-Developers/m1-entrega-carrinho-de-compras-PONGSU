const productsCart = [
    {
        id: 1,
        name: "Mouse",
        price: 368.80
    }, {
        id: 2,
        name: "Teclado",
        price: 771.91
    }, {
        id: 3,
        name: "Notebook",
        price: 4356.71
    }, {
        id: 4,
        name: "Monitor",
        price: 643.34
    }, {
        id: 5,
        name: "512gb SSD",
        price: 490.42
    }, {
        id: 6,
        name: "Headset",
        price: 630.13
    }, {
        id: 7,
        name: "Webcam",
        price: 123.64
    }
]
let sum = 0
function calcSum() {
    for (let i = 0; i < productsCart.length; i++) {
       sum += productsCart[i].price
    }
    return sum
}
calcSum()

let body = document.querySelector('body')
let navigationMenu = document.createElement('nav')
navigationMenu.innerHTML = "<img src='./logo.png' alt='logo loja kenzie'></img>"
body.appendChild(navigationMenu)

let main = document.createElement('main')
body.appendChild(main)

let cart = document.createElement('div')
main.appendChild(cart)

let cart_tittle = document.createElement('section')
cart_tittle.classList.add('cart_tittle')
cart.appendChild(cart_tittle)

let cart_tittle_item = document.createElement('p')
cart_tittle_item.innerText = 'Item'
let cart_tittle_valor = document.createElement('p')
cart_tittle_valor.innerText = 'Valor'
cart_tittle.appendChild(cart_tittle_item)
cart_tittle.appendChild(cart_tittle_valor)

let item_list = document.createElement('ul')
item_list.classList.add('item_list')
cart.appendChild(item_list)

for (let i = 0; i < productsCart.length; i++) {
    let item = document.createElement('li')
    item.id = `productID:${productsCart[i].id}`

    let item_name = document.createElement('p')
    item_name.classList.add('item_name')
    item_name.innerText = productsCart[i].name

    let item_price = document.createElement('p')
    item_price.classList.add('item_price')
    item_price.innerText = `R$ ${productsCart[i].price.toFixed(2)}`

    item.appendChild(item_name)
    item.appendChild(item_price)
    item_list.appendChild(item)
}

let cart_footer = document.createElement('section')
cart_footer.classList.add('cart_footer')

let total = document.createElement('div')
total.classList.add('total')

let total_tittle = document.createElement('p')
total_tittle.innerText = 'Total'
let total_result = document.createElement('p')
total_result.innerText = `R$ ${sum.toFixed(2)}`
total_result.classList.add('total_number')


let buy_button = document.createElement('button')
buy_button.classList.add('buy_button')
buy_button.innerText = "Finalizar Compra"

total.appendChild(total_tittle)
total.appendChild(total_result)
cart_footer.appendChild(total)
cart_footer.appendChild(buy_button)
cart.appendChild(cart_footer)