function load() {
    let total = 0
    const products = document.querySelectorAll('.product')
    products.forEach(product => {
        product.querySelector('.btn-load').addEventListener('click', load)
        product.querySelector('input').addEventListener('input', function () {
            if (!/^\d*$/.test(this.value)) {
                console.log(this.value);
                this.value = this.value.slice(0, -1)
            }
            if (this.value <= 0 || this.value == '') {
                this.value = 1
            }
        })
        const price = parseInt(product.querySelector('.product-price span')
            .innerText
            .replaceAll('.', ''))
        const quantity = parseInt(product.querySelector('.product-quantity input')
            .value)
        console.log(price, quantity);
        product.querySelector('.product-total span').innerText = (price * quantity).toLocaleString('vi-VN')
        total += price * quantity
    })
    document.querySelector('.total-amount span').innerText = total.toLocaleString('vi-VN')
}
load()