const prds = document.querySelectorAll('.prd')
const addToCarts = document.querySelectorAll('.add-to-cart')

const discount = document.querySelector('.discount')

// let items = null

let deleteButton = null

addToCarts.forEach(button => {
    button.addEventListener('click', () => {

        const prd = button.closest('.prd')

        const prdImgSRC = prd.querySelector('.prd-img img').src
        const prdName = prd.querySelector('.prd-info').innerText.trim()
        const prdPrice = prd.querySelector('.prd-price').innerText.trim()

        // console.log(
        //     prdImgSRC,
        //     prdName,
        //     prdPrice
        // );

        const item = isFound(prdName, prdPrice);

        if (item) {
            let itemQuantity = item.querySelector('input.quantity').value
            itemQuantity = parseInt(itemQuantity) + 1
            item.querySelector('input.quantity').value = itemQuantity

            item.querySelector('.total').textContent = getTotal(prdPrice, itemQuantity)
            
            totalDiscount()
            
        } else {
            const html = getHtml(prdName, prdPrice, prdImgSRC)
            const tbody = document.querySelector('tbody')
            const footer = document.querySelector('.footer')
            tbody.insertBefore(html, footer)
            
            totalDiscount()
            // tbody.innerHTML += html

            // const result = isFound(prdName, prdPrice)            
            // deleteButton = result.querySelector('i.fa-xmark')
                
            
        }
    })
});



function getDiscount(price) {
    return price * 0.5
}

function getTotal(price, quantity) {
    return price * quantity
}

function getHtml(name, price, src) {
    const row = document.createElement('tr');
    row.classList.add("item");
    row.innerHTML = `
             <td class="name">
                        ${name}
                    </td>
                    <td>
                        <span>
                            $
                        </span>
                        <span class="price">
                            ${price}
                        </span>
                    </td>
                    <td class="col-img">
                        <img src="${src}" alt="">
                    </td>
                    <td>
                        <div class="input-area">
                            <input type="number" class="quantity" value="1">
                            <i class="fa-solid fa-xmark"></i>
                        </div>
                    </td>
                    <td>
                        <span>
                            $
                        </span>
                        <span class="total">
                            ${getTotal(price, 1)}
                        </span>
                    </td>
    `

    row.querySelector(".fa-solid.fa-xmark").onclick = function(){
        row.remove()
    }
    let rprice = row.querySelector('.price').textContent.trim()
    const rtotal = row.querySelector('.total')

    row.querySelector('.quantity').addEventListener('change', function(){
        rprice = parseInt(rprice)
        console.log(rtotal);
        
        rtotal.textContent = getTotal(rprice ,this.value)
        
        totalDiscount()
        
    })
    return row
}

function isFound(name, price) {

    let found = null

    const items = Array.from(document.querySelectorAll('.item'))

    // console.log(items);

    items.map(item => {
        const itemName = item.querySelector('td.name').innerText.trim();
        const itemPrice = item.querySelector('span.price').innerText.trim();
        const itemQuantity = item.querySelector('input.quantity').value
        const itemImgSRC = item.querySelector('.col-img img').src

        // console.log(
        //     'CLICK',
        //     itemName,
        //     itemPrice,
        //     itemQuantity
        // );

        if (itemName == name) {
            found = item
        }
    })
    return found
}


function totalDiscount() {
    let totalPrice = 0
    let priceD = document.querySelectorAll('.total')

    priceD.forEach(price =>{
        totalPrice += parseInt(price.textContent)
        console.log(totalPrice);
    })

    
    let discount = document.querySelector('.discount')
    discount.textContent = getDiscount(totalPrice)
}