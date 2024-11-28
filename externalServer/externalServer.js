import http from 'http'

const server = http.createServer((req, res) => {
    if(req.method === 'GET') {
        if(req.url === '/api/test-data') {
            res.writeHead(200, {"content-type" : 'application/json'})
            res.end(JSON.stringify('신흥 세력 개발자!'))
        }
    }

})

server.listen(5000, () => {
    console.log('서버실행 http://localhost:5000')
})