const btns = document.querySelectorAll('.btn-add');
btns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const parent = btn.closest('.item')
        const itemName = parent.querySelector('.item-name').innerText
        const itemPrice = parent.querySelector('.item-price span').innerText
        const itemImg = parent.querySelector('.item-img').src

        const key = `.van${index}`

        console.log('khoa', index, key, itemName, itemPrice, itemImg);

        const item = document.querySelector(key)

        if (item) {
            console.log('da co roi, tang so luong');
            let value = parseInt(item.querySelector('.quantity').value)
            value++
            item.querySelector('.quantity').value = value
        } else {
            const itemNew = createItem(itemName, itemPrice, itemImg, index)
            const lastRow = document.querySelector('.last-row')
            document.querySelector('.table tbody').insertBefore(itemNew, lastRow)
        }
        loadPrice()
    })
})
//tao 1 san pham moi
function createItem(name, price, img, index) {
    const html = `
    <td class="name">${name}</td>
    <td class="price">$<span>${price}</span></td>
    <td><img class="img" src="${img}" alt=""></td>
    <td><input class="quantity" type="number" name="" id="" min="0" value="1"><button>❎</button></td>
    <td class="total">$<span>${price}</span></td>
    `
    const tableItem = document.createElement('tr')
    tableItem.className = `table-item van${index}`
    tableItem.innerHTML = html

    tableItem.querySelector('button').addEventListener('click', () => {
        tableItem.remove()
        loadPrice()
    })

    return tableItem
}
//bai 3
//ham load gia tri
function loadPrice() {
    let total = 0
    const items = document.querySelectorAll('.table-item')
    items.forEach(item => {
        const itemPrice = parseInt(item.querySelector('.price span').innerText)
        const itemQuantity = parseInt(item.querySelector('.quantity').value)

        item.querySelector('.total span').innerText = itemPrice * itemQuantity
        total += itemPrice * itemQuantity
    })
    document.querySelector('.total-amount span').innerText = total * 0.5
}