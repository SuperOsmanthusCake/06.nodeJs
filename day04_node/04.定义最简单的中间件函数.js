const express = require('express')
const app = express()

// 定义一个最简单的中间件函数
const mw = function(req,res,next){
    console.log('这是最简单的中间件函数');
    // 把流转关系，转交给下一个中间件函数
    next()
}

// 将 mw 注册为全局生效的中间件
app.use(mw)

app.get('/',(req,res)=>{
    res.send('你好,龙海峰')
})
app.get('/user',(req,res)=>{
    res.send('在想你，海峰')
})

app.listen(8080,()=>{
    console.log('http://127.0.0.1:8080');
})