const btnUps = document.querySelectorAll('.fa-caret-up')
const btnDowns = document.querySelectorAll('.fa-caret-down')
const btnDels = document.querySelectorAll('.item button')

btnDowns.forEach(btnDown => {
    btnDown.addEventListener('click', () => {
        const parent = btnDown.closest('.item')
        decrease(parent)
        loadData()
    })
})

btnUps.forEach(btnUp => {
    btnUp.addEventListener('click', () => {
        const parent = btnUp.closest('.item')
        increase(parent)
        loadData()
    })
})

btnDels.forEach(btnDel => {
    btnDel.addEventListener('click', () => {
        const parent = btnDel.closest('.item')
        parent.remove()
        loadData()
    })
})

function increase(ele) {
    let quantity = parseInt(ele.querySelector('input.item-quantity').value)
    if (quantity >= 99) {
        quantity = 99
        alert('Số lượng đạt tối đa!')
        return
    }
    ele.querySelector('input.item-quantity').value = quantity += 1
}
function decrease(ele) {
    let quantity = parseInt(ele.querySelector('input.item-quantity').value)
    if (quantity <= 1) {
        quantity = 1
        alert('Đã là số lượng nhỏ nhất!')
        return
    }
    ele.querySelector('input.item-quantity').value = quantity -= 1
}

function loadData() {
    const items = document.querySelectorAll('table .item')
    let total = 0
    items.forEach(item => {
        const price = parseInt(item.querySelector('span.item-price').textContent.trim().replaceAll(',', ''))
        const quantity = parseInt(item.querySelector('input.item-quantity').value)
        const priceTotal = item.querySelector('span.item-price-total')

        console.log(price * quantity);
        priceTotal.textContent = (price * quantity).toLocaleString('en-US')

        total += (price * quantity)
    })
    document.querySelector('span.order-total').textContent = total.toLocaleString('en-US')
}
loadData()