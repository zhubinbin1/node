const http = require("http")
let options = {
    host:"localhost",
    port:3000,
    path:"/index.html",
    method:"post",
    headers:{
        // "Content-Type":"application/json"
        "Content-Type":"application/x-www-form-urlencoded"
    }
}
// "Content-Type":"application/json;"
// "Content-Type":"application/x-www-form-urlencoded"
let client = http.request(options,function(res){
    res.on("data",function(chunk){
        console.log("client=="+chunk.toString())
    })
    res.on("end",function(){
        
    })
})
// console.log(JSON.stringify({name:"123"}))
// client.end(JSON.stringify({name:"123"}))
client.end("name=zhubin:a=10")
// client.end("{\"name\":\"123\"}")