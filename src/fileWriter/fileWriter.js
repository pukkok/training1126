import fs from 'fs'
import template from '../template/buildTemplate.js'

const fileWriter = () => {
    fs.writeFile('./public/index.html', String(template), (err) => {
        if(err) return console.error('에러 발생')
    })
}

// fileWriter()

export default fileWriter