const rowSlider = document.querySelector('.slider-prd')

const btnLeftPrd = rowSlider.querySelector('.btn-left')
const btnRightPrd = rowSlider.querySelector('.btn-right')

const listPrd = rowSlider.querySelector('.list-prd')
const prds = rowSlider.querySelectorAll('.prd')

function getWidth() {
    return prds[0].getBoundingClientRect().width
}

console.log(getWidth());

let currentIndex = 0; // Chỉ số hiện tại của sản phẩm

btnLeftPrd.addEventListener('click', () => {
    currentIndex > 0 ? (currentIndex --, updateSlider()) : null
    // if (currentIndex > 0) {
    //     currentIndex--; // Giảm chỉ số
    //     updateSlider();
    // }
});

btnRightPrd.addEventListener('click', () => {
    currentIndex < prds.length - 2 ? (currentIndex ++, updateSlider()) : null
    // if (currentIndex < prds.length - 2) {
    //     currentIndex++; // Tăng chỉ số
    //     updateSlider();
    // }
});

function updateSlider() {
    const width = getWidth();
    listPrd.style.transition = 'all .3s ease'
    listPrd.style.transform = `translateX(-${currentIndex * width}px)`; // Di chuyển danh sách
}
