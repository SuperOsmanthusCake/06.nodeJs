const express = require('express')
const router = express.Router()

// 在这里挂载对应的路由模块
// 定义一个 GET 接口
router.get('/get',(req,res) => {
    // 通过 req.query 获取客户端通过查询字符串，发送到服务器的数据
    const query = req.query
    // 调用 res.send() 方法,向客户端响应处理结果
    res.send({
        status:0, // 0成功，1失败
        msg:'GET 成功', // 状态描述
        data:query // 需要响应给客户端的数据

    })
})

// 定义一个 POST 接口
router.post('/post',(req,res)=>{
    // 通过 req.body 获取请求体中包含的 url-encoded 格式的数据
    const body = req.body
    // 调用 res.send() 方法，向客户端响应结果
    res.send({
        status:0, // 0成功，1失败
        msg:'POST 成功', // 状态描述
        data:body // 需要响应给客户端的数据

    })
})

// 定义一个 delete 接口
router.delete('/delete',(req,res)=>{
    res.send({
        status:0, // 0成功，1失败
        msg:'DELETE 成功', // 状态描述
    })
})

module.exports = router