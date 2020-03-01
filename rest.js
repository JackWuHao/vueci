
module.exports = {
    APIError: function (code, message) {
        this.code = code || 'internal:unknown_error';
        this.message = message || '';
    },
    restify: (pathPrefex)=>{
        // REST API前缀，默认为/api/:
        pathPrefex = pathPrefex || '/api/';
        return async(ctx,next)=>{
             if (ctx.request.path.startsWith(pathPrefex)){
                  ctx.rest=(data)=>{
                    console.log('+++REST请求+++');
                    ctx.response.type = 'application/json';
                    ctx.response.body = data;
                  }
                  await next()
             }else{
                 await next()
             }
        }
    }
}