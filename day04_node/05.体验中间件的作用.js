const express = require('express')
const app = express()

// 将 mw 注册为全局生效的中间件
app.use(function(req,res,next){
    console.log('这是最简单的中间件函数');
    // 获取到请求到达服务器的时间
    const time = Date.now()
    // 为 req 对象，挂载自定义属性，从而把时间共享给后面所有的路由
    req.startTime = time
    // 把流转关系，转交给下一个中间件函数
    next()
})

app.get('/',(req,res)=>{

    res.send('你好,龙海峰' + req.startTime)
})
app.get('/user',(req,res)=>{
    res.send('在想你，海峰'+ req.startTime)
})

app.listen(8080,()=>{
    console.log('http://127.0.0.1:8080');
})