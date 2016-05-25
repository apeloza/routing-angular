
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/views/home.html',
      controller: "homeController"
    })
    .when('/soldier', {
      templateUrl: '/views/characters.html',
      controller: "soldierController"
    })
    .when('/symmetra', {
      templateUrl: '/views/characters.html',
      controller: "symmetraController"
    })
    .when('/hanzo', {
      templateUrl: '/views/characters.html',
      controller: "hanzoController"
    })
    .otherwise({
      redirectTo: 'home'
    });
}]);
