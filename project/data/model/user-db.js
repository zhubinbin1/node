
let User = require('./user')

//插入
function insert() {
    var user = User({
        username: 'zhubin5',                 //用户账号
        userpwd: 'abcd',                            //密码
        userage: 37,                                //年龄
        logindate: new Date()                      //最近登录时间
    });
    // User.insertMany
    user.save(function (err, res) {
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    });
}
// insert()
//更新
function update() {
    //collection.update is deprecated. Use updateOne, updateMany, or bulkWrite instead.
    var whereUserName = { username: 'Tracy McGrady' }
    var updateStr = { userpwd: "zzzz" }
    User.updateOne(whereUserName, updateStr, function (err, doc) {
        if (err) {
            console.log("Error:" + err);
        } else {
            console.log("Res:" + doc);
        }
    })
}
// update()
//byId 更新
function findByIdUpdate() {
    var id = "5e81a04ccd19a0a93f9777f4";
    var updateStr = { userpwd: "yyyy" };
    User.findByIdAndUpdate(id, updateStr, function (err, res) {
        if (err) {
            console.log("Error:" + err);
        } else {
            console.log("Res:" + res);
        }
    })
}
// findByIdUpdate()

//删除
function del() {
    var whereStr = { username: 'Tracy McGrady' }
    User.remove(whereStr, function (err, res) {
        if (err) {
            console.log("Error:" + err);
        } else {
            // console.log("Res:" + res);
            console.log("Res:" + JSON.stringify(res));
        }
    })
}
// del()

function find() {
    return new Promise((resolve,reject)=>{
        var whereStr = { "username": "zhubin5" }
        User.find(whereStr, function (err, res) {
            if (err) {
                reject(err)
            } else {
                resolve(res)
            }
        })
    })
    
}
// find()
/**
 *   条件查询
    $or　　　或关系  https://docs.mongodb.com/manual/reference/operator/query/or/
　　$nor　　　 或关系取反
　　$gt　　　　大于
　　$gte　　　 大于等于
　　$lt　　　　 小于
　　$lte　　　  小于等于
　　$ne            不等于
　　$in             在多个值范围内
　　$nin           不在多个值范围内
　　$all            匹配数组中多个值
　　$regex　　正则，用于模糊查询
　　$size　　　匹配数组大小
　　$maxDistance　　范围查询，距离（基于LBS）
　　$mod　　   取模运算
　　$near　　　邻域查询，查询附近的位置（基于LBS）
　　$exists　　  字段是否存在
　　$elemMatch　　匹配内数组内的元素
　　$within　　范围查询（基于LBS）
　　$box　　　 范围查询，矩形范围（基于LBS）
　　$center       范围醒询，圆形范围（基于LBS）
　　$centerSphere　　范围查询，球形范围（基于LBS）
　　$slice　　　　查询字段集合中的元素（比如从第几个之后，第N到第M个元素）
 * 
 */
function getByConditions() {
    var wherestr = { 'username': 'Tracy McGrady' };
    //1表示查询输出该字段，0表示不输出
    // var opt = { "username": 1, "_id": 0 };
    var opt = { "_id": 0 };
    // var opt = {"username": 1};
    //第2个参数opt可以设置要查询输出的字段
    wherestr = { userage: { $gte: 32, $lte: 65 } }
    User.find(wherestr, opt, function (err, res) {
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    })
}
// getByConditions()
// 数量查询
// collection.count is deprecated, and will be removed in a future version. Use Collection.countDocuments or Collection.estimatedDocumentCount instead
function getCountByConditions() {
    var whereStr = {}
    // User.estimatedDocumentCount
    User.estimatedDocumentCount(whereStr, function (err, count) {
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + count);
        }
    })
}
// getCountByConditions()
//模糊查询
function getByRegex() {
    //用户名中有'zhu'的名字，且不区分大小写
    var whereStr = { 'username': { $regex: /zhu/i } };

    User.find(whereStr, function (err, res) {
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    })
}
// getByRegex();
//分页查询
function getByPager() {
    var pageSize = 5;                   //一页多少条
    var currentPage = 1;                //当前第几页
    var sort = { 'logindate': -1 };        //排序（按登录时间倒序）
    var condition = {};                 //条件
    var skipnum = (currentPage - 1) * pageSize;   //跳过数

    User.find(condition).skip(skipnum).limit(pageSize).sort(sort).exec(function (err, res) {
        if (err) {
            console.log("Error:" + err);
        }
        else {
            console.log("Res:" + res);
        }
    })
}
// getByPager();




module.exports = {
    insert,
    find,
    update,
    del,
}
