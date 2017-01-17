app.controller('locationsController', function($scope, locationFactory, $routeParams){

  locationFactory.index(function(data){
    $scope.locations= data;
  })

  if($routeParams.id){
    locationFactory.getOne($routeParams, function(data){
      $scope.showOne = data;
    })
  }

  //$scope.locations = locationFactory.locations;
	$scope.add = function(){
		locationFactory.add($scope.newLocation)
		$scope.newLocation= {};
    console.log(newLocation)
	}
})
