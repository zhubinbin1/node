
let { dbUrl } = require('./config')
let mongoose = require("mongoose")
mongoose.connect(dbUrl, { useUnifiedTopology: true, useNewUrlParser: true });
mongoose.connection.on('connected', function () {
    console.log("db connection success " + dbUrl)
});
mongoose.connection.on("error", function (err) {
    console.log("db connection error " + err)
});
mongoose.connection.on('disconnected', function () {
    console.log('db connection disconnected');
});

module.exports = mongoose;
