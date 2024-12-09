function init() {
    const items = document.querySelectorAll('.item')
    items.forEach((item, index) => {
        const key = `truong${index}`
        const name = item.querySelector('p').innerText
        const price = parseInt(item.querySelector('p+p').innerText)
        item.querySelector('button').addEventListener('click', () => {
            const elem = document.querySelector(`.${key}`)
            if (elem) {
                elem.querySelector('input[type="number"]').value++
            } else {
                item.classList.add('added')
                const newElem = getHtml(key, name, price)
                const table = document.querySelector('table tbody')
                table.insertBefore(newElem, table.lastElementChild)
            }
            load()
        })
    })
}
function getHtml(key, name, price) {
    const html = `
        <td>
            <img src="./images/img1.png" alt="">
        </td>
        <td>
            <p>
                ${name}
                <span>${price}</span>
            </p>
        </td>
        <td>
            <div>
                <input type="number" value="1">
            </div>
        </td>
        <td>
            <div>
                <input type="text">
            </div>
        </td>
        <td>
            <button>❎</button>
        </td>
    `
    const tr = document.createElement('tr')
    tr.innerHTML = html
    tr.className = `item-table ${key}`
    return tr
}
function load() {
    const itemTables = document.querySelectorAll('.item-table')
    let total = 0
    itemTables.forEach(item => {
        item.querySelector('button').addEventListener('click', ()=>{
            const index = parseInt(item.className.replaceAll('item-table truong', ''))
            document.querySelectorAll('.item')[index].classList.remove('added')
            item.remove();
            load()
        })
        const price = parseInt(item.querySelector('td>p span').innerText)
        const quantity = parseInt(item.querySelector('input[type="number"]').value)
        item.querySelector('input[type="text"]').value = (price * quantity).toLocaleString()
        total += price * quantity
    })
    document.querySelector('.total-amount').value = total.toLocaleString()
}
init()
load()