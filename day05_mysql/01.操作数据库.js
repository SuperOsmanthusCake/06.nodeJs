// 1.导入 mysql 模块
const mysql = require('mysql')
// 2.建立与 Mysql 数据库的连接
const db = mysql.createPool({
    host:'127.0.0.1',// 数据库的IP地址
    user:'root',// 登录数据库的账号
    password:'098851',// 登录数据库的密码
    database:'my_db_01'// 指定要操作那个数据库
})

// // 测试mysql模块是否正常工作
// db.query('SELECT 1',(err,results)=>{
//     // mysql 模块工作期间报错了
//     if(err) return console.log(err.message);
//     // 能够执行 sql 语句
//     console.log(results);
// })

// // 查询users表所有数据
// const sqlStr = 'select * from users'
// db.query(sqlStr,(err,results)=>{
//     // 查询失败
//     if(err) return console.log(err.message);
//     // 查询数据成功
//     // 注意：如果执行的是 select 查询语句，则执行的结果是数组
//     console.log(results);
// })

// // 向users表中添加一个新的值
// let user = { username:'xm',password:'123456'}
// // 定义待执行的sql语句
// let sqlStr = 'insert into users (username,password) values (?,?)'
// // 执行sql语句
// db.query(sqlStr,[user.username,user.password],(err,results)=>{
//     // 执行sql语句失败了
//     if(err) return console.log(err.message);
//     // 注意：如果执行的是 insert 插入语句，则results是一个对象
//     // 可以通过affectedRows属性来判断是否插入成功
//     if(results.affectedRows === 1) {
//         console.log('我加入数据成功了');
//     }
// })

// // 演示如何更新新用户的信息
// const user = {id:5,username:'xb',password:'123456'}
// // 定义sql语句
// const sqlStr = 'update users set username=?,password=? where id=?'
// // 执行sql语句
// db.query(sqlStr,[user.username,user.password,user.id],(err,results)=>{
//     if(err) return consosle.log(err.message);
//     // 注意：执行了 update 语句之后，执行的结果也是一个对象，可以通过affectedRows属性来判断是否修改成功
//     if(results.affectedRows === 1){
//         console.log('我先修改数据成功啦');
//     }
// })

// // 演示如何删除一个数据
// let sqlStr = 'delete from users where id=?'
// db.query(sqlStr,5,(err,results)=>{
//     if(err) return console.log(err.message);
//     // 注意：执行了 delete 语句之后，执行的结果也是一个对象，可以通过affectedRows属性来判断是否删除成功
//     if(results.affectedRows === 1){
//         console.log('我删除数据成功啦');
//     }
// })

// 演示标记删除一个数据
let sqlStr = 'update users set status=? where id=?'
db.query(sqlStr,[1,3],(err,results)=>{
    if(err) return console.log(err.message);
    if(results.affectedRows === 1){
        console.log('我标记数据成功啦');
    }
})