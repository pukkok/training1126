window.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root')
    let opacityValue = 0
    
    root.innerHTML = '안녕 민석!'
    root.style.opacity = opacityValue
    
    function timer () {
        const dongjack = setTimeout(() => {
            if(opacityValue < 1){
                opacityValue = opacityValue + 0.1
                root.style.opacity = opacityValue
                console.log(opacityValue)
                timer()
            } else {
                clearTimeout(dongjack)
            }
        }, 1000)
    }

    timer()
})
