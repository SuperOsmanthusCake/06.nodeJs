// 使用path模块处理路径问题
// 导入path模块
let path = require('path')
let fs = require('fs')


// 读文件
fs.readFile(path.join(__dirname,'./file/1.txt'),'utf-8',function(err,dataStr){
    if(err){
        return console.log('文件读取失败'+err.message);
    }
    console.log(dataStr);
})