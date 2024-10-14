const prdList = document.querySelector('.product-list')

const inputs = prdList.querySelectorAll('input')

inputs.forEach(input => {
    input.addEventListener('input', function () {
        if (!/^\d*$/.test(this.value)) {
            this.value = this.value.slice(0, -1)
        }
    })

    input.addEventListener('focusout', () => {
        if (input.value === '' || parseInt(input.value) == 0) {
            input.value = 1
        }

        updateTotalPrice()

        updateTotal()
    })
})

function updateTotalPrice() {
    inputs.forEach(input => {
        const element = input.closest('.item-price')
        let price = element.querySelector('.price').textContent.trim()
        price = price.replaceAll(',', '')
        price = parseInt(price)

        let quantity = parseInt(element.querySelector('.count input').value)
        console.log(
            price,
            quantity,
            price * quantity
        );
        element.querySelector('.total').textContent = (price * quantity).toLocaleString('en-US')
    })
}

function updateTotal() {
    let total = 0

    const items = document.querySelectorAll('.item')

    items.forEach(item => {
        let price = item.querySelector('.price').textContent.trim()
        price = price.replaceAll(',', '')
        price = parseInt(price)

        let quantity = parseInt(item.querySelector('.count input').value)

        total += price * quantity
    })

    console.log(total);
    const orderTotal = document.querySelector('.total-prd span span')
    orderTotal.textContent = total.toLocaleString('en-US')

}

const buttons = prdList.querySelectorAll('button')

buttons.forEach(button => {
    button.addEventListener('click', () => {
        updateTotal()
    })
})

const clearQuantity = prdList.querySelectorAll('i')

clearQuantity.forEach(button => {
    button.addEventListener('click', () => {
        console.log(button);
        const input = button.closest('.count').querySelector('input')
        console.log(input);
        input.value = 1
        updateTotal()
        updateTotalPrice()
    })
})


updateTotal()
updateTotalPrice()

console.log(document);
