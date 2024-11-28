console.log('읽기 완료')

window.addEventListener('DOMContentLoaded', () => {
    const firstAnchor = document.getElementById('get-test')
    firstAnchor.addEventListener('click' , () => {
        fetch('/api/test-data')
        .then(res => res.json())
        .then(data => {
            const minji = document.getElementById('김민지')
            const minjiP = minji.querySelector('p')
            let result = data
            minjiP.innerHTML = result
        })
    })
})
