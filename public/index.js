console.log('읽기 완료')

window.addEventListener('DOMContentLoaded', () => {
    const firstAnchor = document.getElementById('get-test')
    const minji = document.getElementById('김민지')
    const minjiP = minji.querySelector('p')

    firstAnchor.addEventListener('click' , () => {
        if(minjiP.innerText === '제이쿼리 개발자!') {
            fetch('/api/test-data')
            .then(res => res.json())
            .then(data => {
                let result = data
                minjiP.innerHTML = result
            })
        } else {
            fetch('/api/reset-data')
            .then(res => res.json())
            .then(data => {
                let result = data
                minjiP.innerHTML = result
            })
        }
    })
})
