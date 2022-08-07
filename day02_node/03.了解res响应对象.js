const http = require('http')
const server = http.createServer()
server.on('request',(req,res)=>{
    // 解决中文乱码问题
    res.setHeader('Content-Type','text/html;charset=utf-8')
    // 调用res.end()方法，向客户端响应一些内容
    res.end('我对你的请求发起了响应')
})
server.listen(8080,()=>{
    console.log('server at http://127.0.0.1:8080');
})