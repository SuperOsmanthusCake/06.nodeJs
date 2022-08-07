// 导入数据库操作模块
const db = require('../db/index')
// 导入处理密码的模块
const bcrypt = require('bcryptjs')

// 获取用户基本信息的处理函数 
exports.getUserInfo = (req,res)=>{
    // 定义 sql 语句
    const sql = 'select id, username, nickname, email, user_pic from ev_users where id = ?'
    // 调用 db.query() 执行sql
    db.query(sql, req.user.id,(err,results)=>{
        // 执行 sql 失败
        if(err) return res.cc(err)
        // 查询结果为空
        if(results.length !== 1) return results.cc('海峰: 大哥没有找到你要的结果')

        // 用户信息获取成功
        res.send({
            status:0,
            message:'海峰: 你要的用户信息找到了！',
            data: results[0]
        })
    })
}

// 更新用户信息的处理函数
exports.updateUserinfo = (req,res)=>{
    // 定义 SQL 语句
    const sql = 'update ev_users set ? where id = ?'
    // 调用 db.query() 执行 sql 语句并传入参数
    db.query(sql,[req.body,req.body.id],(err,results)=>{
        // 执行 sql 是啊比
        if(err) return res.cc(err)
        // 影响行数不为 1
        if(results.affectedRows !== 1) return res.cc('海峰: 你修改用户信息失败了哦！')
        
        res.cc('海峰: 卧槽! 更新用户信息成功了耶！', 0)
    })
}

// 修改密码的是处理函数
exports.updatePassword = (req,res)=>{
    // 根据 id 查询用户信息
    const sql = 'select * from ev_users where id=?'
    // 执行根据 id 查询用户信息的 sql 语句 注意：只要用户认证成功了，就会把相应的值赋值给req.user
    db.query(sql,req.user.id, (err,results)=>{
        // 执行sql语句失败
        if(err) return res.cc(err)
        // 判断结果是否存在
        if(results.length !== 1) return res.cc('海峰: 用户不存在！')
        // 判断旧密码是否正确
        const compareResult = bcrypt.compareSync(req.body.oldPwd,results[0].password)
        // 如果密码错误
        if(!compareResult) return res.cc('海峰：旧密码错误，你还有两次机会！')

        // 定义跟新密码 sql 语句
        const sql = 'update ev_users set password = ? where id = ?'
        // 对新密码加密
        const newPwd = bcrypt.hashSync(req.body.newPwd,10)
        // 调用 db.query() 来执行 sql 语句
        db.query(sql,[newPwd,req.user.id],(err,results)=>{
            // 执行 sql 失败
            if(err) return res.cc(err)
            // 判断影响的行数
            if(results.affectedRows !== 1) return res.cc('海峰：更新密码失败，再试一次吧！')
            // 成功
            res.cc('海峰：'+req.user.username+'你修改密码成功了',0)
        })
    })
    
}

// 更新用户头像的处理函数
exports.updateAvatar = (req,res)=>{
    res.send('海峰：更换头像')
}

// 更新用户头像的处理函数
exports.updateAvatar = (req,res)=>{
    // 1.定义更新头像的 sql 语句
    const sql = 'update ev_users set user_pic = ? where id = ?'
    // 2.调用db.query()执行 sql 语句
    db.query(sql,[req.body.avatar,req.user.id],(err,results)=>{
        // 执行 sql 失败
        if(err) return res.cc(err)
        // 影响的行数是否等于 1
        if(results.affectedRows !== 1) return res.cc('海峰：更换头像失败了')
        // 成功
        res.cc('海峰：'+req.user.username+'更新头像成功',0)
    })
}
