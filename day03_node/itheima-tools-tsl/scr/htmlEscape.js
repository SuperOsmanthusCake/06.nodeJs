// 定义转义 HTML 字符函数
function htmlEscape(htmlstr){
    return htmlstr.replace(/<|>|&/g,(match)=>{
        switch (match){
            case '<':
                return '&lt;'
            case '>':
                return '&gt;'
            case '&':
                return '&amp;'
        }
    })
}

// 定义还原 HTML 字符函数
function htmlUnEscape(htmlstr){
    return htmlstr.replace(/&lt;|&gt;|&qout;|&amp;/g,(match=>{
        switch (match){
            case '&lt;':
                return '<'
            case '&gt;':
                return '>'
            case '&qout;':
                return '"'
            case '&amp;':
                return '&'
        }
    }))
}
module.exports = {
    htmlEscape,
    htmlUnEscape
}
