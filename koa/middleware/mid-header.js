

module.exports = function(){
    return async function(ctx,next){
        ctx.type = 'text/html; charset=utf-8';
        // ctx.request.type = 'text/html; charset=utf-8';
        ctx.set('Cache-Control', 'no-cache');
        // ctx.set('charset', 'utf-8');
        await next()
    }
}