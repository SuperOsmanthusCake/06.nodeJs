// 导入express
const express =require('express')
// 创建服务器实例对象
const app = express()
const joi = require('joi')

// 导入并配置 cors 中间件
const cors = require('cors')
app.use(cors())

// 配置解析表单数据的中间件 注意：这个中间件只能解析这种application/x-www-form-urlencoded类型数据
app.use(express.urlencoded({ extended:false }))

// 一定要在路由之前，封装 res.cc 函数
app.use((req,res,next)=>{
    // status 默认值为 1，表示失败的情况
    // err 的值，可能只一个错误对象，也可能是一个错误的描述字符串
    res.cc = function(err,status = 1){
        res.send({
            status,
            message: err instanceof Error ? err.message : err
        })
    }
    next()
})

// 一定要在路由之前配置解析 token 的中间件
const expressJwt = require('express-jwt')
const config = require('./config')

app.use(expressJwt({secret:config.jwtSecretKey}).unless({ path: [/^\/api\//] }))


// 导入并使用路由模块
const userRouter = require('./router/user')
app.use('/api',userRouter)
// 导入并使用用户信息的模块
const userinfo = require('./router/userinfo')
app.use('/my',userinfo)
// 导入并使用文章分类的路由模块
const artcateRouter = require('./router/artcate')
app.use('/my/article',artcateRouter)
// 导入并使用文章的路由模块
const articleRouter = require('./router/article')
app.use('/my/article',articleRouter)
app.use('/uploads', express.static('./uploads'))

// 定义错误级别的中间件
app.use((err,req,res,next)=>{
    // 验证失败导致的错误
    if(err instanceof joi.ValidationError) return res.cc(err)
    // 省份认证验证错误
    if(err.name === 'UnauthorizedError') return res.cc('身份认证失败！')
    res.cc(err)

    next()
})
 
// 启动服务器
app.listen(3007,()=>{
    console.log('API server running at http://127.0.0.1:3007' );
})