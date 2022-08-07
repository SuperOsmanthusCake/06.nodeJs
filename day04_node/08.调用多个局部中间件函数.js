const express = require('express')
const app = express()

// 定义第一个局部中间件函数
const mw1 = function(req,res,next){
    console.log('调用了第一个局部中间件');
    next()
}
// 定义第二个局部中间件函数
const mw2 = function(req,res,next){
    console.log('调用了第二个局部中间件');
    next()
}

// 创建路由
app.get('/',mw1,mw2,(req,res) => {
    res.send('宝')
})
app.get('/user',(req,res) => {
    res.send('臭宝')
})

app.listen(8080,()=>{
    console.log('Express server running at Http://127.0.0.1:8080');
})