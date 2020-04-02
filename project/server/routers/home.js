
let Router = require('koa-router')
let HomeController = require('./controllers/home')
let routers = new Router()
routers.get('/', HomeController.getHome)
routers.post('/',async function(ctx){
        //查找库
        ctx.redirect('/')
    })
module.exports = routers