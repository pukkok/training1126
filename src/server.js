import http from 'http'

const server = http.createServer((req, res) => {
    if(req.method === 'GET') {
        if(req.url === '/') {
            res.writeHead(200, {"content-type" : 'text/plain; charset=utf8'})
            res.write('안녕하세요')
            res.end()
        }
    }

})

server.listen(8080, () => console.log('http://localhost:8080'))