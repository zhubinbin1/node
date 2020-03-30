## node使用
- npm node package manager package.json 多个文件的集合
- npm 全局包(不能在代码中使用,在命令中使用 -g),和本地包.

### nrm npm pvm
'''
- npm instlal nrm -g  
nrm ls 
nrm use taobao/cnpm/npm
'''
### 创建自己的全局包

npm init 创建package.json
npm link 在全局npm做一个快捷键  反 npm unlink
/usr/local/Cellar/node/11.6.0/bin/pack-zhubin -> /usr/local/Cellar/node/11.6.0/lib/node_modules/pack-zhubin/index.js
/usr/local/Cellar/node/11.6.0/lib/node_modules/pack-zhubin -> /Users/binbin/H5WORK_SPACE/node-test

#! /usr/bin/env node
  "bin": {
    "pack-zhubin": "./index.js"
  },
  执行对应的脚本

### 本地包
代码中使用,开发中使用 --save-dev (-D)
--save(-S)  上线开发都需要
默认是--save
```
npm install jquery
npm install #babel/core -D
```
- package-lock.json 锁定版本
- dependencies(npm install --producion)
> devDependencies
> npm install jquery@3.4.1


- "peerDependencies": {} 同等依赖 提示用户需要安装
"peerDependencies": {
    “lodash”:"1.0.0"
} ,
- npm pack 执行此命令会处理pack-zhubin-1.0.0.tgz 包,里面打包的数据可通过以下方式,是否需要将其打入包中
- "bundleDependencies": ["juqery"] 指定打包的依赖
- "optionalDependencies": {} 可选依赖

### 版本号
三个版本号 2 项目的整体更新 1 增加新功能 0 bug   不要手动更改
npm version major/minor
npm version
^2.1.0 最上版本,以2开头
~2.1.0 可以改最后一位,第二位不能超过1
其他 >=2.1.0 <=2.1.0 
alpha beta beta
alpha 预览版本 beta群测试版本 rc
2.1.0-beta@1.0.0
## npx 使用
npx mime xxx.js 5.2版本后出的
## yarn 
不能和npm混用,一直用其中一个就好
npm install yarn -g
yarn add jquery yarn remove jquery
## 发包
- 先进入到发包的文件夹中
- 配置忽略文件
- 查看对应版本和名字
- 切换到官方发布 `nrm use npm` npm login /  npm addUser 用户名和密码进行登陆
- 创建账号 npmjs.org 进入官网,注册
- npm publish 发布 可在官网查找
npm 再发布需要提升版本
npm unpublish --force
使用:
npm install pack-zhubin -g
## scripts
npm run 功能将当前文件夹下的node_module是bin放到path环境中,如果run后后命令,会执行,这个执行的命令在.bin目录下可直接执行

## node核心模块(utils event)
node 基于事件
## buffer 应用

## fs应用和流


# ejs的使用
官网: https://ejs.bootcss.com/#install
