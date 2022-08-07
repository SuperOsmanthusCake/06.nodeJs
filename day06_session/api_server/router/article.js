// 文章的路由模块

// 导入解析 formdata 格式表单数据的包
const multer = require('multer')
// 导入处理函数路径的核心模块
const path = require('path')
// 导入 express 模块
const express = require('express')
const router = express.Router()

// 创建 multer 实例对象，通过 dest 属性指定文件的存放路径
const upload = multer({dest:path.join(__dirname,'../uploads')})

// 导入需要的函数处理模块
const article_handler = require('../router_handler/article')

// 导入验证数据的中间件
const expressJoi = require('@escook/express-joi')
// 导入需要的验证规则对象
const { add_article_scema } = require('../schema/article')

// 发布文章的路由
router.post('/add',upload.single('cover_img'),expressJoi(add_article_scema),article_handler.addArticle)

module.exports = router