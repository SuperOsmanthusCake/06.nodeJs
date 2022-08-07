// 处理时间函数
function dateFormat(dateStr){
    const dt = dateStr
    
    const y = dt.getFullYear()
    const m = padZero(dt.getMonth() + 1)
    const d = padZero(dt.getDate())

    const hh = padZero(dt.getHours())
    const mm = padZero(dt.getMinutes())
    const ss = padZero(dt.getSeconds())

    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}

// 定义一个补零函数
function padZero(date){
    return date > 9 ? date : '0' + date
}

module.exports = {
    dateFormat
}