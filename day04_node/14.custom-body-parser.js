// 导入Node.js内置的querystring模块
const qs = require('querystring')

function parser(req,res,next){
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
}
module.exports = parser