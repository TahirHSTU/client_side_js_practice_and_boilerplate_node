const {app, ejs, express} = require('./dependencies')
const homeController = require('./controller/homeController')

app.get('/', homeController.homeFunction)

