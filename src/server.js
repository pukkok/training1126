import http from 'http'

const server = http.createServer((req, res) => {
    if(req.method === 'GET') {
        if(req.url === '/') {
            
        }
    }

})

server.listen(8080, () => console.log('http://localhost:8080'))