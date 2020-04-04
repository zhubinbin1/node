
const Koa = require('koa')
const serve = require('koa-static')


const app = new Koa();
const port = 3003;
// app.use((ctx) => {
//     ctx.body = 123
// })
app.use(serve(__dirname + '/client'))
app.use(serve(__dirname + '/node_modules'))
app.listen(port, () => {
    console.log(`${port} is listen`);
})


