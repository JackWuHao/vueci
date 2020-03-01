

// **********************运行一次就行************
// **********************快捷命令 npm tab ************

const TABInit  = require('./server/addModel')

//获取表对象
let UserTest = TABInit.UserTest
// UserTest.sync()
//同步表结构
//User.sync()// 如果表存在 不会刷新结构
//User.sync({force:true})   // 如果表存在 会删除表重新建表

// *************************   运行一下代码时请先创建表******************
//**********************快捷命令 npm tab ************

//创建数据
// const create = require('./server/sql/create')
// create(UserTest)

//更新数据
// const update = require('./server/sql/update')
// update(UserTest)

//查询数据
 const search = require('./server/sql/search')
 search(UserTest)

//删除
// const dele = require('./server/sql/update')
// dele(UserTest)

