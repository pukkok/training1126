import http from 'http'
import extractContentType from './fileReader/extractContentType.js'

const server = http.createServer((req, res) => {


    if(req.method === 'GET') {
        
        if(req.url === '/') {
            const tester = extractContentType('../public/index.html')
            const testerTwo = extractContentType('../public/index.js')
            console.log(tester, testerTwo)

            res.writeHead(200, {"content-type" : 'text/plain; charset=utf8'})
            res.write('안녕하세요')
            res.end()
        }
    }

})

server.listen(8080, () => console.log('http://localhost:8080'))