var express = require ('express')
var app = express()
var path = require ('path')
var bp = require ('body-parser')
app.use(bp.json())
app.use(express.static(path.join(__dirname,'client')));
require('./server/config/mongoose.js')
require('./server/config/routes')(app)
app.listen(8000, function(){
  console.log('you are on port 8000')
})
