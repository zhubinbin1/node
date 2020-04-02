/**
 *  user 子路由
 */

const Router = require('koa-router')()
const UserController = require('./controllers/user')
// const router = new Router()
const routers = Router
  .get('/signIn', UserController.signIn)
  .post('/signIn', UserController.postSignIn)
  .post('/signUp', UserController.signUp)
module.exports = routers