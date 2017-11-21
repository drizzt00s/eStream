module.exports = function(m){
	m.controller('home', function($scope, $http){
       $http.get('/data').success(function(data){
 			alert(data);
        }).error(function(error){
          
        });
	});
};


