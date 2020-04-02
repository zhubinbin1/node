/**
 * 整合所有子路由
 */

const router = require('koa-router')()
const home = require('./home')
const user = require('./user')
// const admin = require('./admin')
const error = require('./error')

router.use('/', home.routes(), home.allowedMethods())
router.use('/user', user.routes(), user.allowedMethods())
router.use('/error', error.routes(), error.allowedMethods())
module.exports = router