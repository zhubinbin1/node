
//中间件的编写

function log( ctx ) {
    console.log("===>method:"+ ctx.method+"\nhost:"+ ctx.header.host +"\nurl:"+ ctx.url )
}

module.exports = function () {
  return async function ( ctx, next ) {
    log(ctx);
    await next()
  }
}