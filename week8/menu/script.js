document.addEventListener('DOMContentLoaded', () => {

    const navItems = Array.from(document.querySelectorAll('.nav_item'))

    navItems.map(navItem => {

        navItem.addEventListener('click', () => {
            console.log('click');
            // const isContain = navItem.classList.contains('active')
            // isContain ? navItem.classList.remove('active') : navItem.classList.add('active')
            
            const activeCurret = document.querySelector('.active')
            if (activeCurret) {
                if (activeCurret === navItem) {
                    activeCurret.classList.remove('active')
                } else {
                    activeCurret.classList.remove('active')
                    navItem.classList.add('active')
                    console.log(navItem);
                }
            } else {
                navItem.classList.add('active')
                console.log(navItem);
            }
        })
    })
    // const input = document.querySelector('input')
    // input.addEventListener('input',()=>{
    //     if (!/^\d*$/.test(input.value)) {
    //         input.value = input.value.slice(0, -1)
    //         console.log('hehe');
    //     }
    // })
})