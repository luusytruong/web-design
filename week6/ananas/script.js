const slideRowThree = document.querySelector('.content')
const wrapperSlideContent = document.querySelector('.wrapper-slide')
const slideContents = slideRowThree.querySelectorAll('.slide-content')

const btnLeft = document.querySelector('.fa-chevron-left')
const btnRight = document.querySelector('.fa-chevron-right')

let i = 0
let width = 0

slideContents.forEach(slideContent => {
    width = slideContent.offsetWidth
    slideContent.id = `true${i}`
    i++
});

btnLeft.addEventListener('click', scrollLeft)
btnRight.addEventListener('click', scrollRight)

function scrollLeft() {
    count--
    slideRowThree.scrollLeft -= width
    resetInterval()
}

function scrollRight() {
    count++
    slideRowThree.scrollLeft += width
    resetInterval()
}

let count = 0
let intervalId = null

function startInterval() {
    intervalId = setInterval(() => {
        scrollRight()
        if (count >= slideContents.length) {
            slideRowThree.scrollLeft = 0
            count = 0
        }
    }, 2500);
}

function resetInterval() {
    clearInterval(intervalId)
    startInterval()
}
startInterval()

//product list
const rowProduct = document.querySelector('.row-prdt')
if (rowProduct) {
    const items = rowProduct.querySelectorAll('.item')
    items.forEach((item, index) => {
        item.addEventListener('click', (e) => {
            e.preventDefault()
            if (!item.classList.contains('sold')) {
                console.log(index);
                window.location.href = 'product.html'
            }
        })
    })
}

