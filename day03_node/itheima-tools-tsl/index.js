// 这是包的入口文件
const format = require('./scr/dateFormat')
const escape = require('./scr/htmlEscape')

// 向外暴露成员
module.exports = {
    ...format,
    ...escape
}