const express = require('express')
const app = express()

// 注意除了错误级别的中间件，其它中间件都要在路由配置之前
// 通过express.josn这个中间件，解析表单中的josn格式的数据
app.use(express.json())
// 通过express.josn这个中间件，来解析表单中的url-encodeed的格式数据 
app.use(express.urlencoded({ extended: false }))

// 定义一个路由
app.post('/',function(req,res){
    // 在服务器里可以通过req.boby这个属性，来接收客户端发过来的请求数据
    console.log(req.body);
    res.send('你好，海峰')
})

app.post('/book',function(req,res){
    // 默认情况下，如果不配置解析表单数据的中间件，则req.body默认为空对象
    console.log(req.body);
    res.send('海峰，啊啊啊')
})


app.listen(8080,()=>{
    console.log('Express server running at Http://127.0.0.1:8080');
})