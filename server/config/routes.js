var location = require('./../controllers/locations.js')
module.exports = function(app){
app.post('/locations/add', function(req, res){
  location.add(req, res)
})
  app.get('/locations/all', function (req, res){
    location.index(req, res);
  })
  app.post('/locations/show', function(req, res){
    locationd.getOne(req, res);
  })
}
