// 创建基本的服务器
const express = require('express')
const app = express()
// 导入Node.js内置的querystring模块
const qs = require('querystring')

// 这是解析表单数据的中间件
app.use((req,res,next)=>{
    // 定义中间件具体业务逻辑
    // 定义一个字符串
    let str = ''
    // 监听req的data事件
    req.on('data',(chunk)=>{
        str += chunk
    })
    // 监听req的end事件
    req.on('end',()=>{
        // TODO:把字符串格式的数据，解析成对象格式
        const newStr= qs.parse(str)
        req.body = newStr
        next()
    })

})

app.post('/',(req,res)=>{
    // 这句话会报错，因为字符串和对象不可以用加号输出
    // res.send('早上好'+req.body)  
    res.send(req.body)

})
app.listen(8080,()=>{
    console.log('Express server running at http://127.0.0.1:8080');
})