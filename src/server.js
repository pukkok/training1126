import http from 'http'
import FileReader from './fileReader/FileReader.js'
import fileWriter from "./fileWriter/fileWriter.js"

import {exec} from 'child_process'
const server = http.createServer((req, res) => {
    if(req.method === 'GET') {
        fileWriter()
        const file = new FileReader(req.url, res)
        file.read()
    }
})

server.listen(8080, () => {
    // console.log('http://localhost:8080')
    exec('start http://localhost:8080', () => {
        console.log('서버 동작')
    })
})