## 安装
```
npm install itheima-tools-tsl
```

## 导入
```js
const itheima = require('itheima-tools-tsl')
```

## 格式化事件
```js
// 调用dateFormat格式化时间
const dtStr = itheima.dateFormat(new Date())
// 2022-07-10 11:13:01
console.log(dtStr);
```

## 转义 HTML 中的特殊字符串
```js
const str = '<h1>我是一个标题&我是一个标签</h1>'
// 调用htmlEscape对字符串进行转义
const newStr = itheima.htmlEscape(str)
// &lt;h1&gt;我是一个标题&amp;我是一个标签&lt;/h1&gt;
console.log(newStr);
```

## 还原 HTML 字符串
```js
// 调用htmlUnEscape还原字符串
const oldStr = itheima.htmlUnEscape(newStr)
// <h1>我是一个标题&我是一个标签</h1>
console.log(oldStr);
```

## 开源协议
SIC