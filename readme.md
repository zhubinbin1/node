
项目包含mongoose ,mongodb ,ejs ,node, express ,koa,ECharts 练习项目
# express 使用
* 官网api: http://expressjs.jser.us/3x_zh-cn/api.html


# koa 使用 
* 官网api: https://chenshenhai.github.io/koa2-note/note/start/quick.html
* https://koa.bootcss.com/

# mongoose 使用
* 参考: https://www.cnblogs.com/zhongweiv/p/mongoose.html
    https://segmentfault.com/a/1190000010688972 
  测试项目在db目录下
* mongosedb 
https://www.cnblogs.com/zhongweiv/p/node_mongodb.html

# ECharts 线型图
* 参考: https://www.echartsjs.com/zh/tutorial.html 

# ejs 练习测试

- 生成package.json 
```
npm init -y 
npm install -S
```
- 编写router,server.js ,view/index.html
- node-test 目录下,执行 nodemon ./ejs/server.js 启动服务
``` 
nodemon ./ejs/server.js
```
- 浏览器中 输入http://localhost:3000/

> 在项目中,ejs目录下存放的是ejs练习项目

-  ejs.render(str,data,[option])  
options如下：
str：需要解析的字符串模板
data：数据
option：配置选项
var result = ejs.render('<%=123 %>');
console.log(result);//123


> 参数
- cache 缓存编译后的函数，需要指定 filename
- filename 被 cache 参数用做键值，同时也用于 include 语句
- context 函数执行时的上下文环境
- compileDebug 当值为 false 时不编译调试语句
- client 返回独立的编译后的函数
- delimiter 放在角括号中的字符，用于标记标签的开与闭
- debug 将生成的函数体输出
- _with 是否使用 with() {} 结构。如果值为 false，所有局部数据将存储在 locals 对象上。
- localsName 如果不使用 with ，localsName 将作为存储局部变量的对象的名称。默认名称是 locals
- rmWhitespace 删除所有可安全删除的空白字符，包括开始与结尾处的空格。对于所有标签来说，它提供了一个更安全版本的 -%> 标签（在一行的中间并不会剔除标签后面的换行符)。
- escape 为 <%= 结构设置对应的转义（escape）函数。它被用于输出结果以及在生成的客户端函数中通过 .toString() 输出。(默认转义 XML)。
- outputFunctionName 设置为代表函数名的字符串（例如 'echo' 或 'print'）时，将输出脚本标签之间应该输出的内容。
- async 当值为 true 时，EJS 将使用异步函数进行渲染。（依赖于 JS 运行环境对 async/await 是否支持）

> 标签含义
- <% '脚本' 标签，用于流程控制，无输出。
- <%_ 删除其前面的空格符
- <%= 输出数据到模板（输出是转义 HTML 标签）
- <%- 输出非转义的数据到模板
- <%# 注释标签，不执行、不输出内容
- <%% 输出字符串 '<%'
- %> 一般结束标签
- -%> 删除紧随其后的换行符
- _%> 将结束标签后面的空格符删除 

- 【变量】
用<%=...%>输出变量，变量若包含 '<' '>' '&'等字符会被转义
```
var ejs = require('ejs');
var result = ejs.render('<%=a%>',{a:'<div>123</div>'});
console.log(result);//&lt;div&gt;123&lt;/div&gt;
```
如果不希望变量值的内容被转义，那就这么用<%-... %>输出变量
```
var ejs = require('ejs');
var result = ejs.render('<%-a%>',{a:'<div>123</div>'});
console.log(result);//<div>123</div>
```
- 【注释】
用<%# some comments %>来注释，不执行不输出


- 【include】
　include 可以引用绝对路径或相对路径的模板文件
```
    //test.ejs
<% var a = 123 %>
<% console.log(a); %>
//test.js
var ejs = require('ejs');var result = ejs.render('<% include test.ejs %>');
//throw new Error('`include` use relative path requires the \'filename\' option.');
console.log(result);
```
 在.ejs文件中引入其他的外部.ejs文件 
 <%- include public/header.ejs%>


* https://www.cnblogs.com/xiaohuochai/p/7011594.html



> ejs目录下的tmpl是静态的文件.测试ejs.render()方法

 浏览器访问 .../node-test/ejs/tmpl/cleaning.html  ...你的工作目录

 > ejs 使用 

  在模板中, <% %> 括起来的内容会作为 Javascript 代码来编译 <%= %> 和 <%- %>将括起来的变量中的数据渲染到模板 * <%=...%>, 变量值若包含 '<' '>' '&' 等字符会被转义 * <%-...%>, 变量值是什么就输出什么
 
* 参考: https://zhuanlan.zhihu.com/p/52722144



