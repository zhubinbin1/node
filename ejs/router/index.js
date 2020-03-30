let express = require("express")
let router = express.Router()

router.get('/',function(req,res,next){
    res.render('index', { title: '测试11111' });
})

module.exports = router