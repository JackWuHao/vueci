
const loadfile = require('../loadHtmls')
var fn_index = async(ctx,next)=>{

    ctx.response.type = 'text/html';
    ctx.response.body = loadfile('index.html')
}

const model = require('../server/addModel')
const User  = model.UserTest 
const APIError = require('../rest').APIError
var fn_signin = async (ctx,next)=>{
    var
     name = ctx.request.body.name || '',
     password = ctx.request.body.password || '';
     console.log('++++++');
     
    await User.findOne({
         where:{
           email: name
         }
     }).then(value=>{
           console.log(value);
           if (value ){
            ctx.response.type = 'text/html';   
            ctx.response.body =  loadfile('sigin-ok.html')
           }else{
            ctx.response.type = 'text/html';   
            ctx.response.body =  loadfile('sigin-faile.html')  
           }
     }).catch(error=>{
         throw APIError('500','数据库报错')
     })
     //如果数据库还没有建立请把上面的注释掉，用下面的硬编码
    //  ctx.response.type = 'text/html';
    //  if (name === '1150238638@qq.com' && password === '12345') {
    //     ctx.response.body =  loadfile('sigin-ok.html')
    // } else {
    //     ctx.response.body =  loadfile('sigin-faile.html') 
    // }
}

module.exports={
    'GET /':fn_index,
    'POST /signin':fn_signin,
}