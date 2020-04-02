

class HomeController{
  async getHome(ctx){
    await ctx.render('home', { title: "home" })  
  }
}

module.exports = new HomeController()
