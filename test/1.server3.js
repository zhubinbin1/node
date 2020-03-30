const express = require("express")
//回调的方式,express是函数,可以调用创建应用
const app = express();
app.get("/",function(req,res){//无ctx,靠原生req,res
    res.end("/")
})
app.get("/hello",function(req,res){//无ctx,靠原生req,res
    res.end("/hello")
})
app.all("*",function(req,res){
    res.set("Content-type","text/plaint; charset=utf8")
    res.end("/放到最后")
})



app.listen(3000)
