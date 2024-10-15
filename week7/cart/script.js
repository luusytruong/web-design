const datas = [
    {
        img: 'https://ananas.vn/wp-content/uploads/pro_AET00001_1.jpg',
        name: 'San pham 1',
        price: 11000,
        quantity: 1,
        totalprice: 10000
    },
    {
        img: 'https://ananas.vn/wp-content/uploads/pro_AET00001_2.jpg',
        name: 'San pham 2',
        price: 12000,
        quantity: 1,
        totalprice: 11000
    },
    {
        img: 'https://ananas.vn/wp-content/uploads/pro_AET00001_3.jpg',
        name: 'San pham 3',
        price: 13000,
        quantity: 1,
        totalprice: 11000
    },
    {
        img: 'https://ananas.vn/wp-content/uploads/pro_AET00001_4.jpg',
        name: 'San pham 4',
        price: 14000,
        quantity: 1,
        totalprice: 11000
    },
    {
        img: 'https://ananas.vn/wp-content/uploads/pro_AET00001_5.jpg',
        name: 'San pham 5',
        price: 15000,
        quantity: 1,
        totalprice: 11000
    },
    {
        img: 'https://ananas.vn/wp-content/uploads/pro_AET00001_6.jpg',
        name: 'San pham 6',
        price: 16000,
        quantity: 1,
        totalprice: 11000
    },
]

const tbody = document.querySelector('table tbody')
const listItem = document.querySelector('.home-items')

// const quantity = tbody.querySelector('.quantity')

// quantity.addEventListener('change', () => {
//     const tr = quantity.closest('tr')
//     const price = parseInt(tr.querySelector('.price').textContent)
//     quantity.value = parseInt(quantity.value)
//     console.log(quantity.value * price);

//     loadTotal(quantity.value * price)

//     const nodelist = tbody.querySelectorAll('.total-price')

//     const arr = (convertArr(nodelist))

//     loadOrder(arr.reduce(sum))
//     console.log(arr.reduce(sum));


// })

function getItem(img, name, price){
    const html = `
        <img src="${img}" alt="">
        <div class="item-info">
            <div class="item-name">
                ${name}
            </div>
            <div>
                <span class="item-price">
                    ${price}
                </span>
                VND
            </div>
        </div>
        <button class="add-to-cart">
            Thêm vào giỏ
        </button>
    `
    const item = document.createElement('div')
    item.classList.add('item')
    item.innerHTML = html

    const button = item.querySelector('.add-to-cart')
    button.addEventListener('click', ()=>{
        const parent = button.closest('.item')
        console.log(parent);

        const currentName = parent.querySelector('.item-name').textContent.trim()
        
        console.log(isFound(currentName));
        // isFound(currentName)
        
    })

    return item
}

function loadItem() {
    datas.forEach(data=>{
        data.price = data.price.toLocaleString()
        const newItem = getItem(data.img, data.name, data.price)
        listItem.appendChild(newItem)
    })
}

loadItem()

function isFound(value) {
    const allItem = document.querySelectorAll('.itemcart')
    const found = null
    Array.from(allItem).map(item=>{
        const name = item.querySelector('.name')
        console.log(name);
        
        if (name.textContent.trim() == value) {
            found = item
        }
    })
    return found
}

function getHtmlCart(img, name, price, quantity, totalprice) {
    const html = `
        <td class="img">
            <img src="${img}" alt="">
        </td>
        <td class="name">
            ${name}
        </td>
        <td class="price">
            ${price}
        </td>
        <td>
            <input class="quantity" type="number" value="${quantity}" min="1">
        </td>
        <td class="total-price">
            ${totalprice}
        </td>
    `
    const tr = document.createElement('tr')
    tr.classList.add.add('itemcart')
    tr.innerHTML = html

    const input = tr.querySelector('input')

    input.addEventListener('change', () => {
        const tr = input.closest('tr')
        const price = parseInt(tr.querySelector('.price').textContent.replaceAll('.', ''))
        input.value = parseInt(input.value)
        console.log(input.value * price);

        loadTotal(input.value * price, tr)

        const nodelist = tbody.querySelectorAll('.total-price')

        const arr = (convertArr(nodelist))

        loadOrder(arr.reduce(sum))
        console.log(arr.reduce(sum));


    })

    console.log(tr);

    return tr
}

function loadDataCart() {
    datas.forEach(data => {

        data.price = data.price.toLocaleString()
        data.totalprice = data.price.toLocaleString()

        const newTr = getHtmlCart(data.img, data.name, data.price, data.quantity, data.totalprice)

        tbody.insertBefore(newTr, tbody.lastElementChild)
    })

    const nodelist = tbody.querySelectorAll('.total-price')

    const arr = (convertArr(nodelist))

    loadOrder(arr.reduce(sum))
    console.log(arr.reduce(sum));
}

function convertArr(nodelist) {
    const arr = Array.from(nodelist).map(ele => {
        value = ele.textContent.replaceAll('.', '')
        return parseInt(value)
    })
    return arr
}

function loadOrder(value) {
    const totalPrice = tbody.querySelector('.order-total')
    totalPrice.textContent = value.toLocaleString()
}

function loadTotal(value, ele) {
    const totalPrice = ele.querySelector('.total-price')
    totalPrice.textContent = value.toLocaleString()
}

function sum(total, price) {
    return total + price
}

// loadDataCart()