const btns = document.querySelectorAll('.slider button')
let index = 0
btns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.classList.contains('btn-prev')) {
            console.log('cc');
            translate('left')
            document.querySelector('.thumbnail .left input').checked = true
        } else {
            console.log('cl');
            translate()
            document.querySelector('.thumbnail .right input').checked = true
        }
    })
})
const thumbnails = document.querySelectorAll('.thumbnail label')
thumbnails.forEach(thumb => {
    thumb.addEventListener('click', () => {
        if (thumb.classList.contains('left')) {
            console.log('cc');
            translate('left')
        } else {
            console.log('cl');
            translate()
        }
    })
})

function translate(direction) {
    const width = document.querySelector('.slider-side img')
        .getBoundingClientRect()
        .width
    if (direction === 'left') {
        if (index < 1) return
        index--
        document.querySelector('.slider-side').style.transform = `translateX(-${index * width}px)`
    } else {
        if (index >= 1) return
        index++
        document.querySelector('.slider-side').style.transform = `translateX(-${index * width}px)`
    }
    document.querySelector('span.slider-current').innerText = index + 1
}
document.querySelector('span.slider-current').innerText = index + 1
document.querySelector('span.slider-total').innerText = document.querySelectorAll('.slider-side img').length