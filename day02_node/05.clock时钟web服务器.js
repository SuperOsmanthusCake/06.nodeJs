// 导入响应的对象
const fs = require('fs')
const http = require('http')
const path = require('path')


// 创建并启动一个服务器
const server = http.createServer()
server.on('request',(req,res)=>{
    const url = req.url
    let fpath = ''
    if(url === '/'){
        fpath = path.join(__dirname,'./clock/index.html')
    }else{
        fpath = path.join(__dirname,'/clock',url)
    }
    // 读取文件内容
    fs.readFile(fpath,'utf8',(err,dataStr)=>{
    if(err) return res.end('404')
    res.end(dataStr)
    })
})
server.listen(8080,()=>{
    console.log('server at http://127.0.0.1:8080');
})