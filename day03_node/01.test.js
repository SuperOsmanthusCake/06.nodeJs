const itheima = require('./itheima-tools-tsl')

// 格式化时间
const dtStr = itheima.dateFormat(new Date())
console.log(dtStr);

// 转化转意义
const str = '<h1>我是一个标题&我是一个标签</h1>'
const newStr = itheima.htmlEscape(str)
console.log(newStr);

// 还原转意
const oldStr = itheima.htmlUnEscape(newStr)
console.log(oldStr);