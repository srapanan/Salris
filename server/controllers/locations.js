var mongoose = require ('mongoose');
var Location = mongoose.model('Location')
module.exports = (function(){
  return {
      add: function(req, res){
        console.log('hiiiiiii')
          var location = new Location(req.body)
          console.log(location);
          location.save(function(err, location){
              res.json(location)
          });
      },
      index: function(req, res){
        Location.find({}, function(err, data){
          res.json(data)
        })
      },
      getOne: function(req, res){
        Location.findOne({_id: req.body.id}, function(err, data){
          res.json(data)
        })
      }

  }
})()
