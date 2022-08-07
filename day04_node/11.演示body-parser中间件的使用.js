const express = require('express')
const app = express()

// 使用第三方中间件模块
// 1.导入解析表单数据的中间件 body-parser
const parser = require('body-parser')
// 2.使用app.use()来注册中间件
app.use(parser.urlencoded({ extended:false}))


app.post('/',(req,res)=>{
    console.log(req.body);
    res.send('你好,我是post海峰');
})

app.listen(8080,()=>{
    console.log('你好，欢迎使用海峰服务器:http://127.0.0.1:8080');
})