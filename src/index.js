import angular from 'angular';
import uirouter from 'angular-ui-router';

var main = angular.module('app', [uirouter]);

var jobCtl = require('../views/job/job.js')(main);
var configCtl = require('../views/config/config.js')(main);
var accountCtl = require('../views/account/account.js')(main);
var contactCtl = require('../views/contact/contact.js')(main);

require('./service/globalService.js')(main);

main.config(function($stateProvider, $urlRouterProvider){
	$stateProvider.state('job',{
		url:'/job',
		templateUrl:'../views/job/job.html',
		controller:jobCtl
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
	.state('config',{
		url:'/config',
		templateUrl:'../views/config/config.html',
		controller:configCtl
	})
	.state('account',{
		url:'/account',
		templateUrl:'../views/account/account.html',
		controller:accountCtl
	})
	.state('contact',{
		url:'/contact',
		templateUrl:'../views/contact/contact.html',
		controller:contactCtl
	});

	$urlRouterProvider.otherwise('/');
});



