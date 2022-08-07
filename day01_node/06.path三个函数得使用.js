// 导入path
let path = require('path')
let fpath = 'a/b/c/1.html'

// join在上一个代码已经实现

// 获取路径中的文件名
console.log(path.basename(fpath,'.html'));

// 获取文件的扩展名
console.log(path.extname(fpath));