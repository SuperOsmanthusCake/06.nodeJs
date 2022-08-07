const express = require('express')
const app = express()
// 1.导入路由模块
const router = require('./03.router')
// 2.注册路由模块
// app.use()是用来注册全局中间件的  
app.use(router)

app.listen(8080,()=>{
    console.log('http://127.0.0.1:8080');
})