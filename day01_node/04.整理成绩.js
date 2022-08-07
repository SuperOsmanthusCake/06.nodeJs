// 首先获取到成绩.txt文件里的内容
// 导入fs文件操作对象
let fs = require('fs')

// 调用fs.readFile读取文件内容
fs.readFile('./file/成绩.txt','utf8',function(err,dataStr){
    if(err){
        return console.log('文件读取失败'+err.message);
    }
    // 把数据按空格分割 放入一个数组中
    let oldData = dataStr.split(' ')
    // 对数组进行遍历，将=号替换成为：并放进一个新的数组
    let newData = []
    oldData.forEach(item =>{
        newData.push(item.replace('=',':'))
    })
    // 将新的数组转为字符串，并在每个数组元素后加上换行符\r\n
    let data = newData.join('\r\n')
    // 最后把数据写入到文件中
    fs.writeFile('./file/成绩ok.txt',data,function(err){
        if(err){
            return console.log('数据录入失败'+err.message);
        }
        console.log('数据导入成功！');
    })
})

