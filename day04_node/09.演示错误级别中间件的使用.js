const express = require('express')
const app = express()

// 定义一个路由
app.get('/',(req,res)=>{
    // 人为制造错误
    throw new Error('服务器内部发生了错误！')
    res.send('你好，海峰')
})


// 定义错误级别中间件，捕获项目异常错误，从而防止程序异常错误
app.use((err,req,res,nexxt)=>{
    console.log('发生了错误！' + err.message);
    res.send('Error:' + err.message)
})

app.listen(8080,()=>{
    console.log('Express server running at Http://127.0.0.1:8080');
})