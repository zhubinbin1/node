// var http = require("http")
// var util = require("util")
// var url = require("url")
// var querystring = require("querystring")
// http.createServer(function(req,rsp){
//     rsp.writeHead(200,{'Content-Type': 'text/plain; charset=utf-8'})
//     console.log(url.parse(req.url,true))
//     rsp.end(util.inspect(url.parse(req.url,true)))
// }).listen(8888)

var http = require('http');
var querystring = require('querystring');
 
var postHTML = 
  '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
  '<body>' +
  '<form method="post">' +
  '网站名： <input name="name"><br>' +
  '网站 URL： <input name="url"><br>' +
  '其他： <input name="other"><br>' +
  '<input type="submit">' +
  '</form>' +
  '</body></html>';
 
http.createServer(function (req, res) {
  var body = "";
  req.on('data', function (chunk) {
      console.log(Buffer.from(chunk).toString())
    body += chunk;
  });
  req.on('end', function () {
    // 解析参数
    body = querystring.parse(body);
    // 设置响应头部信息及编码
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
 
    if(body.name && body.url) { // 输出提交的数据
        res.write("网站名：" + body.name);
        res.write("<br>");
        res.write("网站 URLw：" + body.url);
    } else {  // 输出表单
        res.write(postHTML);
    }
    res.end();
  });
}).listen(3000);