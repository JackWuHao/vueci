'use strict'

const Koa = require('koa')
const router = require('koa-router')();
const bodyParse = require('koa-bodyparser')
const controllers = require('./controllers')
const rest = require('./rest')
const app = new Koa();

const isProduction = false;
//输出请求
app.use(async (ctx,next)=>{
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
})

//管理post,get请求

//用来加载前端页面请求
controllers(router,'/controllers/')
//用来加载后端数据请求
controllers(router,'/api/')
//解析request 携带的数据
app.use(bodyParse())

//添加区别api和其他请求的区别
//给response.body添加失败和成功方法统一处理
app.use(rest.restifySucess())
app.use(rest.restfyFailure())
//本地时需要自己发送给浏览器加载css等，部署到服务器后就不需要了直接由nignx等处理
if (!isProduction) {
    const staticFiles = require('./static-file');
    app.use(staticFiles('/static/', __dirname + '/static'));
}

app.use(router.routes())
app.listen(3000)
console.log('app start at port 3000');
