function load() {
    let needPay = 0
    let totalAmount = 0
    const items = document.querySelectorAll('.item')
    items.forEach(item => {
        let checkbox = item.querySelector('input[type="checkbox"]')
        if (checkbox.checked) {
            let pricePro = parseInt(item.querySelector('.price p span').innerText.replaceAll('.', ''))
            let priceOrg = parseInt(item.querySelector('.price del span').innerText.replaceAll('.', ''))
            let quantity = parseInt(item.querySelector('input[type="text"]').value)
            needPay += pricePro * quantity
            totalAmount += priceOrg * quantity
        }
    })
    document.querySelector('.need-pay').innerText = needPay.toLocaleString()
    document.querySelector('.total-amount').innerText = totalAmount.toLocaleString()
    document.querySelector('.pro-price').innerText = (totalAmount - needPay).toLocaleString()
    console.log('so lan goi');
}
const btnDes = document.querySelectorAll('.btn-de')
btnDes.forEach(btn => {
    btn.addEventListener('click', () => {
        let value = parseInt(btn.nextElementSibling.value)
        if (value < 2) {
            return
        }
        btn.nextElementSibling.value = value - 1
        load()
    })
})
const btnIns = document.querySelectorAll('.btn-in')
btnIns.forEach(btn => {
    btn.addEventListener('click', () => {
        let value = parseInt(btn.previousElementSibling.value)
        btn.previousElementSibling.value = value + 1
        load()
    })
})
load()
//
const checkItem = document.querySelectorAll('.item input[type="checkbox"]')
let count = 0
checkItem.forEach(cb => {
    cb.addEventListener('change', () => {
        if (cb.checked) {
            count++
        } else {
            count--
        }
        load()
        loadCount()
    })
})

document.querySelector('.col-head input').addEventListener('change', function () {
    checkItem.forEach(cb => {
        cb.checked = this.checked
    })
    if (this.checked) {
        count = checkItem.length
    } else {
        count = 0
    }
    load()
    loadCount()
})
function loadCount() {
    if (count == checkItem.length) {
        document.querySelector('.col-head input').checked = true
    } else{
        document.querySelector('.col-head input').checked = false
    }
    document.querySelector('.col-head span').innerText = `(${count})`
}