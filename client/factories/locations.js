app.factory('locationFactory', function($http){
  var factory = {};
	factory.add = function(data){
		factory.locations.push(data)
    $http.post('/locations/add', data).success(function(data){
      console.log(data)
    })
	}
  factory.locations = [];
  factory.index = function(cb){
    $http.get('/locations/all').success(function(output){
      factory.locations = output;
      cb(output)
    })
  }
  factory.getOne = function(location, cb){
    $http.post('/locations/show', location).success(function(output){
      cb(output)
    })
  }

	return factory
})
