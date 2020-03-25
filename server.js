let http =require("http")
let url = require("url")
let util = require("util")
let mime = require("mime")
let path =require("path")
let fs = require("fs")
//eTag crypto ,
//强制缓存 rep.setHeader("Cache-control","max-age=10")
//强制缓存 rep.setHeader("Expires",new Date(Date.now()+10*1000).toString())
let querystring = require("querystring");
function hasCache(req, res,stat){
    res.setHeader("Cache-control","max-age=10")//强制缓存
    rep.setHeader("Expires",new Date(Date.now()+10*1000).toString())//强制缓存
    let cTime = stat.ctime.toGMTstring()
    res.setHeader("Last-modified",cTime)
    let content=""
    //内容加密,摘要
    let eTag = require("crypto").createHash("md5").update(content).digest("base64")
    res.setHeader("ETag",eTag)
    let ifModifiedSince = req.headers["if-modified-since"]
    let ifNoneMatch = req.headers["if-none-match"]
    if(ifModifiedSince!==cTime){//无缓存
        return false
    }
    if(eTag!==ifNoneMatch){
        return false
    }
    return true
}
http.createServer(function(req,rsp){
    let {pathname} = url.parse(req.url)
    let ct = req.headers["content-type"]
    console.log("pathname:"+pathname)
    let absPath = path.join(__dirname,"public",pathname)
    console.log("absPath:"+absPath)

    fs.stat(absPath,function(err,stat){
        if(err){
            return rsp.end("not found"+err)
        }
        if(stat.isDirectory()){
            fs.stat(absPath,function(err,stat){
                absPath = path.join(absPath,"index.html")
                rsp.setHeader("Content-type","text/html; charset=utf8")
                fs.createReadStream(absPath).pipe(rsp);
            })
        }
        else{
            let type = mime.getType(pathname)||"text/plain"
            rsp.setHeader("Content-type",type+"; charset=utf8")
            fs.createReadStream(absPath).pipe(rsp);
        }
    })
}).listen(3000)
// http.createServer(function(req,rsp){
//     let {pathname} = url.parse(req.url)
//     let ct = req.headers["content-type"]
//     console.log("pathname:"+pathname)
//     let arr = []
//     req.on("data",function(chunk){
//         arr.push(chunk)
//     })
//     req.on("end",function(chunk){
//         let str  = Buffer.concat(arr).toString()
//         if(ct==="application/json"){
//             let obj = JSON.parse(str)
//             console.log(obj)
//             rsp.end(JSON.stringify(obj))
//         }else if(ct==="application/x-www-form-urlencoded"){
//             let obj = querystring.parse(str,":","=")
//             console.log(JSON.stringify(obj))
//             rsp.end(JSON.stringify(obj))
//         }else{
//             rsp.end("no support")
//         }
        
//     })
//     // let type = mime.getType(pathname)||"text/plain"
//     // console.log("type=>"+type)
//     // rsp.setHeader("Content-type",type+"; charset=utf8")
//     // rsp.end("<h1>你好啊</h1>")
// }).listen(3000)
