const inputField = document.querySelectorAll('.range-field input')
inputField.forEach(input => {
    input.addEventListener('input', e => {
        let minVal = parseInt(inputField[0].value)
        let maxVal = parseInt(inputField[1].value)
        console.log(minVal, maxVal)
    })
})