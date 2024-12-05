function load() {
    let total = 0
    const prds = document.querySelectorAll('.prd')
    prds.forEach((prd, index) => {
        prd.querySelector('button').addEventListener('click', () => {
            prd.remove()
            load()
        }, { once: true })
        prd.querySelector('input').addEventListener('change', function () {
            if (this.value <= 0) {
                alert('so luong khong the giam duoc nua !!')
                this.value = 1
            }
            load()
        }, { once: true })
        const price = parseInt(prd.querySelector('.prd-price')
            .innerText
            .replaceAll(',', ''))
        const quantity = parseInt(prd.querySelector('input').value)
        console.log(price, quantity, index);
        prd.querySelector('.prd-total').innerText = (price * quantity).toLocaleString('en-US')
        total += price * quantity
    })
    document.querySelector('.total-amount').innerText = total.toLocaleString('en-US')
}
load()