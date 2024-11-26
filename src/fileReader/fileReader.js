import fs from 'fs'

const fileReader = (path, errMsg="파일 읽기 실패") => {
    fs.readFile(path, (err, readFile) => {
        if(err) return console.error(errMsg)
        
        console.log(readFile)
    })
}

export default fileReader