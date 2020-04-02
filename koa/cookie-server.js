
const Koa = require('koa')
const session = require('koa-session-minimal')
// const MysqlSession = require('koa-mysql-session')

const app = new Koa()

// 配置存储session信息的mysql
// let store = new MysqlSession({
//   user: 'root',
//   password: 'abc123',
//   database: 'koa_demo',
//   host: '127.0.0.1',
// })

// 存放sessionId的cookie配置
let cookie = {
  maxAge: '', // cookie有效时长
  expires: '',  // cookie失效时间
  path: '', // 写cookie所在的路径
  domain: '', // 写cookie所在的域名
  httpOnly: '', // 是否只用于http请求中获取
  overwrite: '',  // 是否允许重写
  secure: '',
  sameSite: '',
  signed: '',
}

// 使用session中间件
app.use(session({
  key: 'SESSION_ID',
  cookie: cookie
}))

app.use( async ( ctx ) => {

  // 设置session
  if ( ctx.url === '/set' ) {
    ctx.session = {
      user_id: Math.random().toString(36).substr(2),
      count: 0
    }
    ctx.body = ctx.session
  } else if ( ctx.url === '/' ) {
    // 读取session信息
    ctx.session.count = ctx.session.count + 1
    ctx.body = ctx.session
  } 

})

app.listen(3000)
console.log('[demo] session is starting at port 3000')





// const Koa = require('koa')
// const app = new Koa()

// app.use( async ( ctx ) => {

//   if ( ctx.url === '/index' ) {
//     ctx.cookies.set(
//       'cid', 
//       'hello world',
//       {
//         domain: 'localhost',  // 写cookie所在的域名
//         path: '/index',       // 写cookie所在的路径
//         maxAge: 10 * 60 * 1000, // cookie有效时长
//         expires: new Date('2020-03-2'),  // cookie失效时间
//         httpOnly: false,  // 是否只用于http请求中获取
//         overwrite: false  // 是否允许重写
//       }
//     )
//     ctx.body = 'cookie is ok'
//   } else {
//     ctx.body = 'hello world' 
//   }

// })

// app.listen(3000, () => {
//   console.log('[demo] cookie is starting at port 3000')
// })