const {app, ejs, express} = require('../dependencies')

exports.homeFunction = function(req, res){
    res.render('home')
}

