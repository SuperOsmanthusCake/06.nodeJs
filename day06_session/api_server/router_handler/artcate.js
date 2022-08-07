// 这是路由处理函数模块

// 导入数据库操作模块
const db = require('../db/index')

// 获取文章分类列表的处理函数
exports.getArtCates = (req,res)=>{
    // 定义查询分类列表数据的 sql 语句
    const sql = 'select * from ev_article_cate where is_delete=0 order by id asc'
    // 调用 db.query() 执行 sql 语句
    db.query(sql,(err,results) => {
        // sql语句执行错误
        if(err) return res.cc(err)
        res.send({
            status: 0,
            message: '海峰：获取文章分类数据成功',
            data: results,
        })
    })

}

// 新增文章分类的处理函数
exports.addArticleCates =(req,res) => {
    // 定义查重的 sql 语句
    const sql = 'select * from ev_article_cate where name=? or alias=?'
    // 执行查重的 sql 语句
    db.query(sql,[req.body.name,req.body.alias],(err,results) => {
        // sql 语句执行失败
        if(err) return res.cc(err)
        // 判断数据的长度
        if(results.length === 2) return res.cc('海峰：分类名称和分类别名被占用，请更换后再试！')
        // length 等于 1 的三种情况
        if(results.length === 1 && results[0].name === req.body.name && results[0].alias === req.body.alias)
            return res.cc('海峰：分类名称和分类别名被占用，请更换后再试！')
        if(results.length === 1 && results[0].name === req.body.name)
            return res.cc('海峰：分类的名称被占用，请更换后再试')
        if(results.length === 1 && results[0].alias === req.body.alias)
            return res.cc('海峰：分类的别名被占用，请更换后再试')
        
        // 定义新增文章的 sql 语句
        const sql = 'insert into ev_article_cate set ?'
        // 执行插入文章分类的 sql 语句
        db.query(sql,req.body,(err,results) => {
            if(err) return res.cc(err)
            if(results.affectedRows !== 1) return res.cc('海峰:新增文章分类失败!')
            res.cc('海峰:新增文章分类成功!',0)
        })
    })
}

// 删除文章分类的处理函数
exports.deleteCateByid = (req,res) => {
    // 定义标记删除文章分类的 sql
    const sql = 'update ev_article_cate set is_delete=1 where id = ?'
    // 调用 db.query() 来执行 sql 
    db.query(sql,req.params.id,(err,results) => {
        if(err) return res.cc(err)
        if(results.affectedRows !== 1) return res.cc('海峰: 删除文章分类失败!')
        res.cc('海峰: 删除文章分类成功!')
    })  
}

// 根据 id 获取文章分类的处理函数
exports.getArtCateByid = (req,res) => {
    // 定义根据 id 获取文章分类的 sql
    const sql = 'select * from ev_article_cate where id=? and is_delete = 0'
    // 调用 db.query() 执行 sql 语句
    db.query(sql,req.params.id,(err,results) => {
        if(err) return res.cc(err)
        if(results.length !== 1) return res.cc('海峰: 没有找到该数据,获取文章分类失败! ')
        res.send({
            status:0,
            message:'海峰: 获取数据成功',
            data: results[0]
        })
    })
}

// 根据 id 更新文章分类的处理函数
exports.updateCateByid = (req,res) => {
    // 定义查重的 sql 语句
    const sql = 'select * from ev_article_cate where Id<>? and (name=? or alias=?)'
    // 调用 db.query() 执行查重的 sql 语句
    db.query(sql,[req.body.Id,req.body.name,req.body.alias],(err,results) => {
        if(err) return res.cc(err)
        // 判断名称和别名被占用的四种情况
        if(results.length === 2) return res.cc('海锋:分类名称和类别被占用,请更换后重试!')
        if(results.length === 1 && results[0].name === req.body.name && results[0].alias === req.body.alias)
        return res.cc('海锋:分类名称和类别被占用,请更换后重试!')
        if(results.length === 1 && results[0].name === req.body.name)
        return res.cc('海锋:分类名称被占用,请更换后重试!')
        if(results.length === 1 && results[0].alias === req.body.alias)
        return res.cc('海锋:分类类别被占用,请更换后重试!')

        // 定义更新文章分类的 sql 语句
        const sql = 'update ev_article_cate set ? where id=?'
        // 执行文章分类的sql 语句
        db.query(sql,[req.body,req.body.Id],(err,results) =>{
            if(err) return res.cc(err)
            if(results.affectedRows !== 1) return res.cc('海锋:更新文章失败')
            res.cc('海锋:更新文章分类成功! ',0)
        })
    })

    
}

