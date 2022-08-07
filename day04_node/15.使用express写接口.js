// 写一个服务器
const express = require('express')
const app = express()

// 配置解析表单数据的中间件
app.use(express.urlencoded({extended:false}))

// 一定要在路有前配置跨域
const cors = require('cors')
app.use(cors())

// 导入路由模块
const router = require('./16.apiRouter')
// 把路由模块，注册到aap上
app.use('/api',router)

app.listen(8080,()=>{
    console.log('express server running at  http://127.0.0.1:8080');
})