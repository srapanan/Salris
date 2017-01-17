var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when ('/home', {
    templateUrl: 'partials/home.html'
  })
  .when ('/show/:id', {
    templateUrl: 'partials/show.html'
  })
  .otherwise ({
    redirectTo: '/home'

  })
})
