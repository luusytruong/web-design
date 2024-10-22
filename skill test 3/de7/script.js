const btnAdds = Array.from(document.querySelectorAll('.item button'))
const tbody = document.querySelector('table tbody')

btnAdds.map((btnAdd, index) => {
    btnAdd.addEventListener('click', () => {
        const parent = btnAdd.closest('.item')
        const code = `prd${index}`
        parent.classList.add('added', code)
        // console.log(index, parent);
        const src = parent.querySelector('.item img').src
        const name = parent.querySelector('.item-name').textContent.trim()
        const price = parent.querySelector('.item-price').textContent.trim()

        const compare = tbody.querySelector(`.item-cart.${code}`)

        if (compare) {
            let quantityInput = compare.querySelector('input.item-cart-quantity')
            let quantity = parseInt(quantityInput.value)
            quantity ++
            quantityInput.value = quantity
            console.log(quantity);
            updatePrice()
            //quantity không thể tăng
            
        } else {
            const newItemCart = getItemCart(code, src, name, price)
            tbody.insertBefore(newItemCart, tbody.lastElementChild)
            updatePrice()
        }

    })
})

function getItemCart(code, src, name, price) {
    const child = `
        <td class="img">
            <img src="${src}" alt="">
        </td>
        <td>
            <p class="item-cart-name">${name}</p>
            <p class="item-cart-price">${price}</p>
        </td>
        <td>
            <div class="input-area">
                <i class="fa-solid fa-caret-left"></i>
                <i class="fa-solid fa-caret-right"></i>
                <input min="1" value="1" class="item-cart-quantity" type="text" readonly>
            </div>
        </td>
        <td>
            <input value="${price}" type="text" class="item-cart-price total" readonly>
        </td>
        <td><i class="fa-solid fa-xmark"></i></td>
    `

    const newItemCart = document.createElement('tr')

    newItemCart.classList.add('item-cart', `${code}`)
    newItemCart.innerHTML = child

    return newItemCart
}

function updatePrice() {
    let total = 0
    const itemCarts = Array.from(tbody.querySelectorAll('.item-cart'))
    itemCarts.map(itemCart => {
        const parent = itemCart.closest('.item-cart')
        const price = parseInt(parent.querySelector('p.item-cart-price').textContent.trim())
        const quantity = parseInt(parent.querySelector('input.item-cart-quantity').value)

        parent.querySelector('input.item-cart-price.total').value = (price * quantity)
        total += (price * quantity)
    })
    tbody.querySelector('input.order-price.total').value = total
}
updatePrice()