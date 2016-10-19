'use strict'
var app = angular.module('Jam');

app.config(function($routeProvider){
	$routeProvider
		.when('/', {
	        templateUrl : 'pages/home/home.html',
	        controller  : 'HomeController'
	    })
	    .when('/signup', {
	        templateUrl : 'pages/signup/signup.html',
	        controller  : 'SignupController'
	    });
});