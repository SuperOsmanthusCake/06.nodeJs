const express = require('express')
const app = express()

// 定义中间件函数
const mw1 = function(req,res,next){
    console.log('调用了局部中间件');
    next()
}

// 创建路由
app.get('/',mw1,(req,res) => {
    res.send('宝')
})
app.get('/user',(req,res) => {
    res.send('臭宝')
})
app.listen(8080,()=>{
    console.log('Express server running at http://127.0.0.1:8080');
})