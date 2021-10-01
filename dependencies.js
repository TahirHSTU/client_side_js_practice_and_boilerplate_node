let express = require('express')
let app = express()
// let nodemailer = require('nodemailer')
// let mongoose = require('mongoose')
let ejs = require('ejs')

// let mongodb = require('mongodb')
// let db
// let connectionString = 'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false'
// for offline
// always commit your changes to github after activating the online string and turning off the offline.


// let connectionString = 'mongodb+srv://appdev:appdev@appdev.6ppvo.mongodb.net/AppDev?retryWrites=true&w=majority'
// for online




app.use(express.json())
// this line tells express to automatically take submitted form data and add it to request object
app.use(express.urlencoded({extended: false}))
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.set('views', 'html-files')
// dependencies that are needed to run the codes below


let port = process.env.PORT
if(port == null || port == ""){
  port = 3000
}

app.listen(port)

module.exports = {app, ejs, express}