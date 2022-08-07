// 导入 fs path 
let fs = require('fs')
let path = require('path')

// 定义正则表达式，分别匹配 <style></style> 和 <script></script> 标签
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

// 先获取到index文件里面的数据
fs.readFile(path.join(__dirname,'./index.html'),'utf-8',function(err,dataStr){
    // 判断是否获取成功
    if(err){
        return console.log('index文件数据获取失败!!!');
    }
    // 成功后执行这三个函数，分别提取不同的代码
    resolveCSS(dataStr)
    resolveJS(dataStr)
    resolveHTML(dataStr)
})

// 提取CSS数据，并生成响应文件
function resolveCSS (htmlStr){
    // 使用正则提取需要的内容
    let r1 = regStyle.exec(htmlStr)
    // 将提取出来的样式字符串，进行字符串的 replace 替换操作
    let newCSS = r1[0].replace('<style>', '').replace('</style>', '')
    // 将newCSS数据写入对应文件夹
    fs.writeFile(path.join(__dirname,'./clock/index.css'),newCSS,function(err){
        if(err){
            return console.log('CSS数据写入失败');
        }
        console.log('CSS文件生成成功');
    })
}

// 提取JS数据，并生成响应文件
function resolveJS(htmlStr){
    // 根据正则表达式提取相应内容
    let r2 = regScript.exec(htmlStr)
    // 将提取出来的样式字符串，进行字符串的 replace 替换操作
    let newJS = r2[0].replace('<script>','').replace('</script>','')
    // 将newJS数据写入对应文件夹
    fs.writeFile(path.join(__dirname,'./clock/index.js'),newJS,function(err){
        if(err){
            return console.log('JS数据导入失败!!!');
        }
        console.log('JS文件生成成功');
    })
}

// 通过正则将不要的数据替换成想要的数据
function resolveHTML(htmlStr){
    let html = htmlStr.replace(regStyle,'<link rel="stylesheet" href="./index.css" />').replace(regScript,'<script src="./index.js"></script>')
    // 将html数据写入对应文件夹
    fs.writeFile(path.join(__dirname,'./clock/index.html'),html,function(err){
        if(err){
            return console.log('htnl数据导入失败!!!');
        }
        console.log('html文件生成成功');
    })
}