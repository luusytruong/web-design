const quantityField = document.querySelectorAll('.item-action input')
quantityField.forEach(quantity => {
    quantity.addEventListener('input', () => {
        if (!/^\d*$/.test(quantity.value)) {
            console.log(quantity.value);
            quantity.value = quantity.value.slice(0, -1)
        }
    })
})
function loadPrice() {
    let total = 0
    const items = document.querySelectorAll('.item')
    items.forEach(item => {

        item.querySelector('.item-action button').addEventListener('click', loadPrice)
        item.querySelector('.btn-delete').addEventListener('click', ()=>{
            item.remove();
            loadPrice()
        })

        const price = parseInt(item.querySelector('.item-price span').innerText.replaceAll(',', ''))
        const quantity = parseInt(item.querySelector('.item-action input').value)
        console.log(price, quantity);
        item.querySelector('.item-total span').innerText = (price * quantity).toLocaleString('en-US')
        total += price * quantity
    })
    document.querySelector('.total-amount span').innerText = total.toLocaleString('en-US')
}
loadPrice()