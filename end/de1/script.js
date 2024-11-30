//const tenbien = document.querySelector('. ten class')
//let tenbien = document.querySelector('. ten class')
//var tenbien = document.querySelector('. ten class')
//khai bao, truy van nut quay ve
const btnPrev = document.querySelector('.btn-prev')
//khai bao, truy van nut tiep theo
const btnNext = document.querySelector('.btn-next')
//lang nghe su kien click tu nut quay ve
btnPrev.addEventListener('click', () => {
    console.log('haha nut quay ve')
    move('left')
})
//lang nghe su kien click tu nut tiep theo
btnNext.addEventListener('click', () => {
    console.log('haha nut tiep theo', getWidth())
    move('right')
})
//viet 1 ham de lay chieu dai cua anh
//cu phap: function <tenham>(){
//code
//}
function getWidth() {
    //khai bao bien lay chieu dai cua anh trong slider
    const width = document.querySelector('.slider-item').
        getBoundingClientRect().width
    //tra ve chieu dai
    return width
}
//khai bao 1 bien index cua so lan nhan
let index = 0
//viet them ham di chuyen anh sang trai, phai
function move(direction) {
    const slider = document.querySelector('.slider')
    if (direction == "left") {
        if (index > 0) {
            index--;
            slider.style.transform = `translateX(-${index * getWidth()}px)`;
        }
    } else if (direction == 'right') {
        if (index < 6) {
            index++;
            slider.style.transform = `translateX(-${index * getWidth()}px)`;
        }
    }
}