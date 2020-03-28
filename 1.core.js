//node 基于事件 ,发布订阅模块
const util =require("util")
const EventEmitter = require("events");
let fs = require("fs")
let path = require("path")

// //打开文件
// let buffer =Buffer.alloc(3)
// fs.open("./1.txt","r",function(err,fd){
//     console.log(fd)
//     // fs.write
//     fs.read(fd,buffer,0,3,2,function(err,byteRead){
//         console.log(byteRead)
//         console.log(buffer.toString())
//     })
// })
// const buf4 = Buffer.from(["123dvf", 2, 3]);
// console.log(buf4)
// buf = Buffer.alloc(256);
// len = buf.write("www.runoob.com");
// var buffer1 = Buffer.from(('菜鸟教程'));
// var buffer2 = Buffer.from(('www.runoob.com'));
// var buffer3 = Buffer.concat([buffer1,buffer2]);
// console.log("buffer3 内容: " + buffer3.toString());

// fs.readFile(path.resolve(__dirname,"index.js"),'utf8',function(err,data){
//     if(data){//文件不存在,会创建,如果有,清空,再写,会以utf8编写,如果是对象格式,会转换utf8
//         fs.writeFile(path.resolve(__dirname,"1.txt"),data,function(err){
//             if(err){
//                 return console.log("error")
//             }
//             console.log("success")
//         })
//     }
// })


// function Girl(){

// }
//继承
// Girl.prototype.__proto__ = EventEmitter.prototype
//es6
// Object.setPrototypeOf(Girl.prototype,EventEmitter.prototype)
// util.inherits(Girl,EventEmitter)
// let girl = new Girl;
// girl.on("newListener",function(type){
//     process.nextTick(()=>{
//         girl.emit(type)
//     })
//     // girl.emit(type)
// })
// girl.on("xxx",function(){
//     console.log("xxxx on 1")
// })
// girl.on("xxx",function(){
//     console.log("xxxx on 2")
// })
// const buf1 = Buffer.alloc(10);
// console.log(buf1)
// let r  = buf1.slice(0,1)
// r[0]=100
// console.log(buf1.slice(0,1))
// girl.emit("xxx");


const a = "123.4.5"
const [k,v,m] = a.split(".")
console.log(k,v,m)