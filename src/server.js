import http from 'http'
import Extender from './fileReader/Extender.js'

const server = http.createServer((req, res) => {


    if(req.method === 'GET') {
        const extender = new Extender(req.url)
        console.log(extender.CotentType)

        if(req.url === '/') {

            res.writeHead(200, {"content-type" : 'text/plain; charset=utf8'})
            res.write('안녕하세요')
            res.end()
        }
    }

})

server.listen(8080, () => console.log('http://localhost:8080'))