// 先创建一个fs操作文件对象
let fs = require('fs')

fs.readFile('./file/1.txt','utf8',function(err,dataStr){
    if(err){
        return console.log('文件读取失败:'+err.message);
    }
    console.log('文件读取成功:'+dataStr);
})