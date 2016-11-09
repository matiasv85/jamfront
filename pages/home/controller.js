'use strict'
var app = angular.module('Jam');

app.controller('HomeController', ['$scope', function($scope){
	$scope.searchText = "Taxiboys";
	$scope.workers = [
		{
			name: "Agustin Labaronnie",
			profilePhoto: "pages/img/agustin.jpg",
			description: "Desarrollador de Software, Bajista a domicilio. Juntando plata para comprar una camara con mayor resolucion"
		},
		{
			name: "Juan Mendoza",
			profilePhoto: "pages/img/juan.jpg",
			description: "Desarrollador de Software, Technical Lead en Despegar.com, trabajos de plomeria en general. Si te lo cruzas, asegurate de saludarlo"
		}
	]
}]);