const rangeField = document.querySelectorAll('.range-field input')
const minStep = 20000
rangeField.forEach(input => {
    input.addEventListener('input', e => {
        let minVal = parseInt(rangeField[0].value);
        let maxVal = parseInt(rangeField[1].value);
        if (maxVal - minVal < minStep) {
            if (e.target === rangeField[0]) {
                rangeField[0].value = maxVal - minStep
            } else {
                rangeField[1].value = minVal + minStep
            }
        }
        minVal = parseInt(rangeField[0].value);
        maxVal = parseInt(rangeField[1].value);
        document.querySelector('.range-display').style.left = `${minVal / 1000}%`
        document.querySelector('.range-display').style.right = `${100 - maxVal / 1000}%`
        console.log(minVal/1000, maxVal/1000);
        document.querySelector('.input-field input').value = minVal.toLocaleString('vi-VN')+'.000đ'
        document.querySelector('.input-field input:last-child').value = maxVal.toLocaleString('vi-VN')+'.000đ'
    })
})