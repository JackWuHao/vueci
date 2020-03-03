

const model = require('../server/addModel')
const User  = model.UserTest

//查询所有的用户
var fn_get_allUser = async(ctx,next)=>{
       await User.findAll().then(value=>{
           ctx.restSucess(value,'查询成功')
       }).catch(error=>{
           ctx.restFailure(error,'查询失败')
       })   
}

module.exports = {
    'GET /api/getUsers': fn_get_allUser
}
