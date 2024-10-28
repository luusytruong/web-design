const minusBtns = document.querySelectorAll(".minus");
const plusBtns = document.querySelectorAll(".plus");
const removeBtns = document.querySelectorAll('.remove-area button')

minusBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    loadQuantity(btn, "minus");
  });
});
plusBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    loadQuantity(btn, "plus");
  });
});
removeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.closest('.prd').remove()
    loadPrice()
  });
});

function loadQuantity(ele, option) {
    const parent = ele.closest('.prd')

    const inputEle = parent.querySelector('input[type="text"]')
    let quantity = parseInt(inputEle.value)
    
    const dforg = parseInt(parent.querySelector('.org-price').textContent.trim().slice(0,-2).replaceAll('.', ''))
    const dfpro = parseInt(parent.querySelector('.pro-price').textContent.trim().slice(0,-2).replaceAll('.', ''))

    if (option === 'plus') {
        quantity ++
        inputEle.value = quantity
        const hdorgValue = parseInt(parent.querySelector('.org-price.hide').textContent.trim())
        const hdproValue = parseInt(parent.querySelector('.pro-price.hide').textContent.trim())
        parent.querySelector('.org-price.hide').textContent = hdorgValue + dforg
        parent.querySelector('.pro-price.hide').textContent = hdproValue + dfpro
        loadPrice()
    } else {
        if (quantity === 1) {
            return
        }
        quantity --
        inputEle.value = quantity
        const hdorgValue = parseInt(parent.querySelector('.org-price.hide').textContent.trim())
        const hdproValue = parseInt(parent.querySelector('.pro-price.hide').textContent.trim())
        parent.querySelector('.org-price.hide').textContent = hdorgValue - dforg
        parent.querySelector('.pro-price.hide').textContent = hdproValue - dfpro
        loadPrice()
    }
}

function loadPrice() {
  const originalPrice = document.querySelectorAll(".org-price.hide");
  const promotionalPrice = document.querySelectorAll(".pro-price.hide");
  let orgTotal = 0;
  let proTotal = 0;
  let finalTotal = 0;

  originalPrice.forEach((value, index) => {
    orgTotal += parseInt(value.textContent)
    proTotal += parseInt(promotionalPrice[index].textContent)
  });

  finalTotal = orgTotal - proTotal;
  
  console.log(orgTotal, proTotal);

  const orgTotalEle = document.querySelector(".org-total span");
  orgTotalEle.textContent = formatedVND(orgTotal);
  const proTotalEle = document.querySelector(".pro-total span");
  proTotalEle.textContent = formatedVND(finalTotal);
  const finalTotalEle = document.querySelector(".final-total span");
  finalTotalEle.textContent = formatedVND(proTotal);
}

function formatedVND(value) {
  return value.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
}

const numbers = document.querySelectorAll(".number");
numbers.forEach((numEle) => {
  const value = parseInt(numEle.textContent);
  numEle.textContent = formatedVND(value);
});

loadPrice();
