'use strict'

const Koa = require('koa')
const router = require('koa-router')();
const bodyParse = require('koa-bodyparser')
const controllers = require('./controllers')
const Rest = require('./rest')
const app = new Koa();
const staticFiles = require('./static-file');


//输出请求
app.use(async (ctx,next)=>{
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
})
//管理post,get请求
controllers(router)
//解析request 携带的数据
app.use(bodyParse())

//处理response
//区分是否是rest 还是其他
app.use(Rest.restify())

app.use(staticFiles('/static/', __dirname + '/static'));

app.use(router.routes())
app.listen(3000)
console.log('app start at port 3000');
