const tbody = document.querySelector('table tbody')

const data = [
    {
        src: 'https://hanoicomputercdn.com/media/product/83426_hacom_sniper_s35_i5_14400f_4060ti_power_by_asus.jpg',
        name: 'Bộ Máy Tính PlayPC Utilmate 13H Coffee Lake (Card VGA GTX 1050 2Gb OC)',
        price: 13990000,
        quantity: 1
    },
    {
        src: 'https://hanoicomputercdn.com/media/product/84061_hacom_sniper_s36_i5_14400f_4060_power_by_msixxx.jpg',
        name: 'Bộ Máy Tính PlayPC Utilmate 24S Coffee Lake (Card VGA GTX 1060 6Gb)',
        price: 24690000,
        quantity: 1
    }
]

let currentOrderTotal = 0
const totalOrder = document.querySelector('.total-order')

function getHtml(src, name, price, quantity) {
    const html = `
        <td>
            <img src="${src}"
                alt="">
        </td>
        <td class="name">
        ${name}
        </td>
        <td>
            <span class="price">
            ${price}
            </span>
            <span>
                đ
            </span>
        </td>
        <td>
            <input min="1" value="${quantity}" type="text" class="quantity" name="quantity">
        </td>
        <td>
            <span class="total-price">
            ${getTotalPrice(price, quantity)}
            </span>
            <span>
                đ
            </span>
        </td>
        <td>
            <div>
                <i class="fa-solid fa-repeat"></i>
                <i class="fa-solid fa-xmark"></i>
            </div>
        </td>
    `
    const tr = document.createElement('tr')
    tr.innerHTML = html

    tr.querySelector('input').addEventListener('input', () => {
        onlyNumber(tr.querySelector('input'))
    })

    tr.querySelector('input').addEventListener('focusout', () => {
        notNull(tr.querySelector('input'))
    })

    const btnReload = tr.querySelector('.fa-repeat')

    btnReload.addEventListener('click', () => {

        const tr = btnReload.closest('tr')

        const trPrice = tr.querySelector('.price').textContent
        const trQuantity = tr.querySelector('.quantity').value

        tr.querySelector('.total-price').textContent = getTotalPrice(trPrice, trQuantity)

        const tbdoy = btnReload.closest('table tbody')
        const allPrice = tbdoy.querySelectorAll('.total-price')

        const array = arrayPrice(allPrice)

        console.log(getOrderTotal(array));

        totalOrder.textContent = getOrderTotal(array)
    })

    return tr
}

function loadData() {

    data.forEach((item, index) => {
        currentOrderTotal += item.price

        item.price = item.price.toLocaleString()
        const newItem = getHtml(item.src, item.name, item.price, item.quantity)
        // console.log(newItem);

        tbody.insertBefore(newItem, tbody.lastElementChild)
        totalOrder.textContent = currentOrderTotal.toLocaleString()
    })
}

function onlyNumber(input) {
    if (!/^\d*$/.test(input.value)) {
        input.value = input.value.slice(0, -1)
        console.log('vail');
    }
}

function notNull(input) {
    if (input.value == '' || input.value == 0) {
        input.value = 1
    }
}


function getTotalPrice(price, quantity) {
    price = price.trim().replaceAll('.', '')
    return (price * quantity).toLocaleString()
}

function arrayPrice(nodelist) {
    const array = Array.from(nodelist).map(element => {
        return parseInt(element.textContent.replaceAll('.', ''))
    })
    return array
}

function getOrderTotal(array) {
    return (array.reduce(sumOrderTotal)).toLocaleString()
}

function sumOrderTotal(total, price) {
    return total + price;
}

loadData()
