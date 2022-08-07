// 导入 http 对象
const http = require('http')
// 创建web服务
const server = http.createServer()
// 创建服务器监听事件
// req是请求对象，包含了与客户端相关的数据和属性
server.on('request',(req)=>{
    const url = req.url
    const method = req.method
    const str = `Your request url is ${url},and request method is ${method}`
    console.log(str);
})
// 启动服务器
server.listen(8080,()=>{
    console.log('server running at http://127.0.0.1:8080');
})