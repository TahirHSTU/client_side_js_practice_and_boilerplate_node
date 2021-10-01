const {app, ejs, express} = require('../dependencies')
const Home = require('../model/homeModel')

exports.homeFunction = function(req, res){
    res.render('home')
}

