import http from 'http'
import FileReader from './fileReader/FileReader.js'
import fileWriter from "./fileWriter/fileWriter.js"

import {exec} from 'child_process'
const server = http.createServer((req, res) => {
    console.log(req.url)
    if(req.method === 'GET') {
        if(['/', '/index.js', '/style.css'].includes(req.url)) {
            fileWriter()
            const file = new FileReader(req.url, res)
            file.read()
        }

        if(req.url === '/api/test-data') {
            fetch('http://localhost:8080/api/test-data')
            .then(res => res.json())
            .then(data => {
                res.writeHead(200, {"content-type" : 'application/json'})
                res.end(JSON.stringify(data))
            })
        }
    }

    
})

server.listen(5000, () => {
    // console.log('http://localhost:5000')
    exec('start http://localhost:5000', () => {
        console.log('서버 동작')
    })
})