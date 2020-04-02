
let fs = require('fs')
let path = require('path')

function render(page) {

    let view = path.resolve(__dirname,`../view/${page}`)
    return new Promise((resolve,reject)=>{
        fs.readFile(view, "binary", function (err, data) {
            if ( err ) {
                reject( err )
              } else {
                resolve( data )
              }
        })
    })
}

async function route(url) {
    let view = '404.html'
    switch (url) {
        case '/':
            view = 'index.html'
            break;
        case '/index':
            view = 'index.html'
            break;
        case '/todo':
            view = 'todo.html'
            break;
        default:
            view = '404.html'
            break
    }
    let html = await render(view)
    return html
}

module.exports = function () {
    return async function (ctx, next) {
        let url = ctx.request.url

        ctx.body = await route(url)
        await next()
    }
}