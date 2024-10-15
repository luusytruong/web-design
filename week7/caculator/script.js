const buttons = document.querySelectorAll('button')

const btnPlus = document.getElementById('plus')
const btnMinus = document.getElementById('minus')
const btnMultiply = document.getElementById('multiply')
const btnDivide = document.getElementById('divide')
const btnEqual = document.getElementById('equal')
const btnReset = document.getElementById('reset')

const screen = document.querySelector('.screen')

let isClickP = false
let isClickMi = false
let isClickMu = false
let isClickD = false

let hasMark = false
let mark = null

let total= 0
let array = []
let a = 0
let b = 0

buttons.forEach(btn=>{
    btn.addEventListener('click', ()=>{
        if (btn == btnPlus) {
            console.log('cong');
            hasMark = true
            mark = '+'
            return
        }
        if (btn == btnMinus) {
            console.log('tru');
            hasMark = true
            mark = '-'
            return
        }
        if (btn == btnMultiply) {
            console.log('nhan');
            hasMark = true
            mark = '*'
            return
        }
        if (btn == btnDivide) {
            console.log('chia');
            hasMark = true
            mark = '/'
            return
        }
        if (btn == btnEqual) {
            console.log('bang');
            if (a !== '' && b !== '') {
                a = parseFloat(a)
                b = parseFloat(b)
                screen.textContent = startCaculator(mark, a, b)
            }
            return
        }
        if (btn == btnReset) {
            console.log('reset');
            a = ''
            b = ''
            hasMark = false
            screen.textContent = '0'
            return
        }

        if (!hasMark) {
            a += btn.textContent
            screen.textContent = parseFloat(a)
            console.log(a);
            
        } else {
            b+= btn.textContent
            screen.textContent = parseFloat(b)
        }
        console.log(parseFloat(btn.textContent));
        array.push(parseFloat(btn.textContent))
    })
})

function startCaculator(director, a, b) {
    if (director == '+') {
        return a+b
    }
    if (director == '-') {
        return a-b
    }
    if (director == '*') {
        return a*b
    }
    if (director == '/') {
        return a/b
    }
}