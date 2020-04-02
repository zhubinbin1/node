
const Router = require('koa-router')

const router = new Router()

router.get('/', async function (ctx) {
    await ctx.render('error', function (err, html) {
        console.log(html)
    })
})
module.exports = router