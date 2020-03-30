

let express = require("express")
let path = require('path')
let index = require('./router/index')
let app = express()
app.set('views', path.join(__dirname, 'views'))
app.engine('.html', require("ejs").__express);
app.set('view engine', 'html')
app.set('view cache', true);
// 自定义闭合标记
// require("ejs").delimiter="?"
// app.set("view options",{delimiter:"?"});
app.use(express.static(path.resolve("../node_modules")))
app.use(express.static(path.resolve(__dirname, "public")))
app.use(index)
app.listen(3000)