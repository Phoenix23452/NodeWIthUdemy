const http = require('http')



const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers)
    res.setHeader('Content-Type', 'text/html')
    res.write("Hello World")
    res.end()
})

server.listen(3000,() => {
    console.log("Youe server is runnig :")
})