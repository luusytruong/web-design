function slide() {
    let index = 0;
    const srcs = ['./images/img1.png', './images/img2.png', './images/img3.png',]
    const img = document.querySelector('.slider-item')
    console.log(img);
    setInterval(() => {
        if (index == srcs.length) {
            index = 0
        }
        img.src = srcs[index]
        index++
    }, 1000);
}
slide()
function slide2() {
    let index = 0
    const width = document.querySelector('.slider-item').getBoundingClientRect().width
    console.log(width);
    setInterval(() => {
        if (index >= 2) {
            index = -1
        }
        index++
        document.querySelector('.slider-wrapper').style.transform = `translateX(-${index * width}px)`
    }, 3000);
}
slide2()
function login(username, password) {
    const account = {
        fullName: 'Luu Sy Truong',
        username: 'truong',
        password: '1'
    }
    if (username === '' || password === '') {
        alert('vui long nhap day du thong tin')
        return
    }
    if (username === account.username && password === account.password) {
        document.querySelector('.btn-login').innerText = '👤 ' + account.fullName
        document.querySelector('.btn-login').classList.add('logged')
        document.querySelector('.active').classList.remove('active')
    } else {
        alert('tai khoan khong ton tai !')
    }
}
document.querySelector('.btn-login').addEventListener('click', function () {
    if (this.classList.contains('logged')) {
        alert('da dang nhap roi')
        return
    }
    document.querySelector('.login').classList.add('active')
})
document.querySelector('.login button+span').addEventListener('click', () => {
    document.querySelector('.login').classList.remove('active')
})
document.querySelector('.login button').addEventListener('click', () => {
    const username = document.querySelector('input[name=username]').value
    const password = document.querySelector('input[name=password]').value
    console.log(username, password);
    login(username, password)
})