
module.exports = {
    APIError:function(code,message){
        this.code = code || 'internal:unknown_error';
        this.message = message || '';
    },
    restifySucess:(pathPrefex)=>{
        pathPrefex = pathPrefex || '/api/';
        return async(ctx,next)=>{
            if (ctx.request.path.startsWith(pathPrefex)){
                ctx.restSucess = (data,message)=>{
                    ctx.response.type = 'application/json';
                    ctx.response.body = {
                        code : '200',
                        message: message,
                        data:data
                    };
                }
                await next()
            }else{
                await next()
            }
        }
    },
    restfyFailure:(pathPrefex)=>{
        pathPrefex = pathPrefex || '/api/';
        return async(ctx,next)=>{
            if (ctx.request.path.startsWith(pathPrefex)){
                ctx.restFailure = (error,message)=>{
                    ctx.response.type = 'application/json';
                    ctx.response.body = {
                        code : '500',
                        message:message,
                        error:error
                    };
                }
                await next()
            }else{
                await next()
            }
        }
    }
}