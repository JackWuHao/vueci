
var loadfile = require('../loadHtmls')
fn_index = async(ctx,next)=>{

    ctx.response.type = 'text/html';
    ctx.response.body = loadfile('index.html')
}

var fn_signin = async (ctx,next)=>{
    var
     name = ctx.request.body.name || '',
     password = ctx.request.body.password || '';
     console.log('sasas')
     ctx.response.type = 'text/html';
     if (name === '1150238638@qq.com' && password === '12345') {
        ctx.response.body =  loadfile('sigin-ok.html')
    } else {
        ctx.response.body =  loadfile('sigin-faile.html') 
    }
}

module.exports={
    'GET /':fn_index,
    'POST /signin':fn_signin,
}