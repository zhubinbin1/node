
let Koa = require("koa")
let loggerAsync = require('./middleware/logger-async')
// let router = require('./router')
let header = require('./middleware/mid-header')
let Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const app = new Koa()
app.use(loggerAsync())
app.use(header())
app.use(bodyParser())
// bodyParser, form post ,router
// let home = Router()
// // 子路由1
// home.get('/', async ( ctx )=>{
//     let html = `
//       <ul>
//         <li><a href="/page/helloworld">/page/helloworld</a></li>
//         <li><a href="/page/404">/page/404</a></li>
//       </ul>
//     `
//     ctx.body = html
//   })
//   // 子路由2
//   let page = new Router()
//   page.get('/404', async ( ctx )=>{
//     ctx.body = '404 page!'
//   }).get('/helloworld', async ( ctx )=>{
//     ctx.body = 'helloworld page!'
//   })
  
//   // 装载所有子路由
//   let router = new Router()
//   router.use('/', home.routes(), home.allowedMethods())
//   router.use('/page', page.routes(), page.allowedMethods())
  
//   // 加载路由中间件
// app.use(router.routes()).use(router.allowedMethods())

// app.use(router())


// app.use( async ( ctx ) => {
//     let url = ctx.request.url
//     url2 = ctx.url
//     query = ctx.query
//     querystring = ctx.querystring
//     console.log(ctx.url)
//     console.log(ctx.querystring)
//     ctx.body = {url2,query,querystring}
//   })



//post


// app.use( async ( ctx ) => {

//     if ( ctx.url === '/' && ctx.method === 'GET' ) {
//       // 当GET请求时候返回表单页面
//       let html = `
//         <h1>koa2 request post demo</h1>
//         <form method="POST" action="/">
//           <p>userName</p>
//           <input name="userName" /><br/>
//           <p>nickName</p>
//           <input name="nickName" /><br/>
//           <p>email</p>
//           <input name="email" /><br/>
//           <button type="submit">submit</button>
//         </form>
//       `
//       ctx.body = html
//     } else if ( ctx.url === '/' && ctx.method === 'POST' ) {
//       // 当POST请求的时候，解析POST表单里的数据，并显示出来
//       let postData = await parsePostData( ctx )
//       ctx.body = postData
//     } else {
//       // 其他请求显示404
//       ctx.body = '<h1>404！！！ o(╯□╰)o</h1>'
//     }
//   })
  
//   // 解析上下文里node原生请求的POST参数
//   function parsePostData( ctx ) {
//     return new Promise((resolve, reject) => {
//       try {
//         let postdata = "";
//         ctx.req.addListener('data', (data) => {
//             console.log("==>"+data)//userName=1&nickName=1&email=122
//           postdata += data
//         })
//         ctx.req.addListener("end",function(){
//           let parseData = parseQueryStr( postdata )
//           resolve( parseData )
//         })
//       } catch ( err ) {
//         reject(err)
//       }
//     })
//   }
  
//   // 将POST请求参数字符串解析成JSON
//   function parseQueryStr( queryStr ) {
//     let queryData = {}
//     let queryStrList = queryStr.split('&')
//     // console.log( queryStrList )
//     for (  let [ index, queryStr ] of queryStrList.entries()  ) {
//       let itemList = queryStr.split('=')
//       queryData[ itemList[0] ] = decodeURIComponent(itemList[1])
//     }
//     return queryData
//   }
  
//   app.listen(3000, () => {
//     console.log('[demo] request post is starting at port 3000')
//   })



app.use( async ( ctx ) => {

    if ( ctx.url === '/' && ctx.method === 'GET' ) {
      // 当GET请求时候返回表单页面
      let html = `
        <h1>koa2 request post demo</h1>
        <form method="POST" action="/">
          <p>userName</p>
          <input name="userName" /><br/>
          <p>nickName</p>
          <input name="nickName" /><br/>
          <p>email</p>
          <input name="email" /><br/>
          <button type="submit">submit</button>
        </form>
      `
      ctx.body = html
    } else if ( ctx.url === '/' && ctx.method === 'POST' ) {
      // 当POST请求的时候，中间件koa-bodyparser解析POST表单里的数据，并显示出来
      let postData = ctx.request.body
      console.log("====>"+postData)
      ctx.body = postData
    } else {
      // 其他请求显示404
      ctx.body = '<h1>404！！！ o(╯□╰)o</h1>'
    }
  })
  
  app.listen(3000, () => {
    console.log('[demo] request post is starting at port 3000')
  })


// app.listen(3000)