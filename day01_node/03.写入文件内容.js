// 导入fs文件模块
let fs = require('fs')  

// 
fs.writeFile('./file/2.txt',"我是第二个node文件",function(err){
    if(err){
        return console.log('数据写入失败'+err.message);
    }
    console.log('数据写入成功！');
})