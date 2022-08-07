const express = require('express')
const app = express()

// 挂载路由
app.get('/',(req,res)=>{
    res.send('你好，get')
})
app.post('/',(req,res)=>{
    res.send('你好，post')
})

app.listen(8080,()=>{
    console.log('http://127.0.0.1:8080');
})

// 这是路由最简单的方法，但在实际中用的不多，因为今后会有很多路由，写在一个文件中会显得恒乱