import http from 'http'
import UrlChecker from './fileReader/UrlChecker.js'

const server = http.createServer((req, res) => {


    if(req.method === 'GET') {
        
        if(req.url === '/') {
            const url = new UrlChecker(req.url)
            url.url = '123'
            console.log(url.url)

            res.writeHead(200, {"content-type" : 'text/plain; charset=utf8'})
            res.write('안녕하세요')
            res.end()
        }
    }

})

server.listen(8080, () => console.log('http://localhost:8080'))