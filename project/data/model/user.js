let mongoose = require('../index')
Schema = mongoose.Schema;

var UserSchema = Schema({
    // username : { type: String , index: true},     //索引
    username : { type: String },                    //用户账号
    userpwd: {type: String},                        //密码
    userage: {type: Number},                        //年龄
    // logindate : { type: Date, default:Date.now},  //默认值
    logindate : { type: Date}                       //最近登录时间
})
// UserSchema.virtual('name.full').get(function () { 
//     return this.userage+this.userpwd;
// });
module.exports = mongoose.model('User',UserSchema);