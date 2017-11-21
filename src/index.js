import angular from 'angular';
import uirouter from 'angular-ui-router';

var main = angular.module('app', [uirouter]);

 var homeCtl = require('../views/home/home.js')(main);
 var visitplaceCtl = require('../views/visitplace/visitplace.js')(main);
 var productsCtl = require('../views/products/products.js')(main);

require('./service/globalService.js')(main);

main.config(function($stateProvider, $urlRouterProvider){
	$stateProvider.state('home',{
		url:'/home',
		templateUrl:'views/home/home.html',
		controller:homeCtl
	})
	// .state('visitplace',{
	// 	url:'/visitplace',
	// 	templateUrl:'views/visitplace/visitplace.html',
	// 	controller:function($scope,myFriendsHotel){
	// 		$scope.name = "Terry";
	// 		$scope.place = 'Zhengjiang';
	// 		$scope.hotel = myFriendsHotel.hotelName($scope);
	// 		$scope.room = myFriendsHotel.hotelNo($scope);
	// 	},
	// 	resolve:{
	// 		'myFriendsHotel':function($q, $timeout){
	// 			var deferred = $q.defer();
	// 			$timeout(function(){
	// 				deferred.resolve({
	// 					hotelName:function(){
	// 						return 'my hotel';
	// 					},
	// 					hotelNo:function(){
	// 						return '212003';
	// 					}
	// 				})
	// 			},5000);
	// 			return deferred.promise;
	// 		}
	// 	}
	// })
	.state('visitplace',{
		url:'/visitplace',
		templateUrl:'views/visitplace/visitplace.html',
		controller:productsCtl
	})
	.state('products',{
		url:'/products',
		templateUrl:'views/products/products.html',
		controller:productsCtl
	});

	$urlRouterProvider.otherwise('/');
});



