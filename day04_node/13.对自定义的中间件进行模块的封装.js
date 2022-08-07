// 创建基本的服务器
const express = require('express')
const app = express()
// 导入自定义模块
const parser = require('./14.custom-body-parser')

// 这是解析表单数据的中间件
app.use(parser)

app.post('/',(req,res)=>{
    // 这句话会报错，因为字符串和对象不可以用加号输出
    // res.send('早上好'+req.body)  
    res.send(req.body)

})
app.listen(8080,()=>{
    console.log('Express server running at http://127.0.0.1:8080');
})