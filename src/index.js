// const first = () => setTimeout(() => {
//     console.log('3초')
//     second()
// }, 3000)

// const second = () => setTimeout(() => console.log('1초 뒤'), 1000)

// first()

let counter = 0

const timer = () => setTimeout(() => {
    if(counter < 5) {
        // console.log('동작 테스트')
        timer()
        counter++
        console.log(counter)
    } else {
        // clearTimeout(timer)
    }

}, 1000)

timer()