const userDb  = require('../../../data/model/user-db') 

class UserController {

    /**
       * 登录操作
       * @param  {obejct} ctx 上下文对象
       */
    async signIn(ctx) {
        await ctx.render('sign-in', { title: "sign in" })
        userDb.find().then(value=>{
            console.log("Res:=>" + value);
        })
    };
    async postSignIn(ctx) {
        console.log("=>" + JSON.stringify(ctx))
        //查库,如果登陆成功
        ctx.redirect('/')
        //    await ctx.render('home',{ title: "登陆成功首页" })
    };


    /**
     * 注册操作
     * @param   {obejct} ctx 上下文对象
     */
    async signUp(ctx) {
        let formData = ctx.request.body
        let result = {
            success: false,
            message: '',
            data: null
        }

        let validateResult = userInfoService.validatorSignUp(formData)

        if (validateResult.success === false) {
            result = validateResult
            ctx.body = result
            return
        }

        let existOne = await userInfoService.getExistOne(formData)
        console.log(existOne)

        if (existOne) {
            if (existOne.name === formData.userName) {
                result.message = userCode.FAIL_USER_NAME_IS_EXIST
                ctx.body = result
                return
            }
            if (existOne.email === formData.email) {
                result.message = userCode.FAIL_EMAIL_IS_EXIST
                ctx.body = result
                return
            }
        }


        let userResult = await userInfoService.create({
            email: formData.email,
            password: formData.password,
            name: formData.userName,
            create_time: new Date().getTime(),
            level: 1,
        })

        console.log(userResult)

        if (userResult && userResult.insertId * 1 > 0) {
            result.success = true
        } else {
            result.message = userCode.ERROR_SYS
        }

        ctx.body = result
    }

}

module.exports = new UserController()
