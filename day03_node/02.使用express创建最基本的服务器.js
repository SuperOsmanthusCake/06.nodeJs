// 1.导入express
let express = require('express')
// 2.创建web服务器
let app = express()
// 4.监听客户端的GET和POST请求，并响应客户端响应具体的请求
app.get('/user',(req,res)=>{
    // 调用repress提供的res.send()方法，向客户端响应一个JSON
    res.send({name:'zs',age:20,gender:'男'})
})
app.post('/user',(req,res)=>{
    // 调用repress提供的res.send()方法，向客户端响应一个文本字符串
    res.send('请求成功')
})

// 3.启动web服务器
app.listen(8080,()=>{
    console.log('express server runing at http://127.0.0.1:8080');
})
