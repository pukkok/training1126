import fs from 'fs'
import UrlChecker from './UrlChecker.js'
import Extender from './Extender.js'

const fileReader = (path, res, contentType, errMsg="파일 읽기 실패") => {
    fs.access(path, fs.constants.F_OK, (err) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' })
            res.end('404 Not Found')
            return
        }

        fs.readFile(path, (err, readFile) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' })
                res.end('500 Internal Server Error')
                console.error(errMsg)
                return 
            }
            res.writeHead(200, { 'Content-Type': contentType })
            res.write(readFile)
            res.end()
        })
    })
}

// class로 생성해보기
class FileReader {
    #url
    #res
    constructor (url, res) {
        this.#url = url
        this.#res = res
    }

    read () {
        const confirmUrl = new UrlChecker(this.#url)
        const path = confirmUrl.path
        const confirmExtender = new Extender(path)
        const contentType = confirmExtender.CotentType
        fileReader(path, this.#res, contentType)
    }
}

export default FileReader