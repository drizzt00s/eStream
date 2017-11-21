module.exports = function(m){
	m.controller('visitplace', function($scope,myFriendsHotel){
		$scope.name = "Terry";
		$scope.place = 'Zhengjiang'
		$scope.hotel = myFriendsHotel.hotelName($scope);
		$scope.room = myFriendsHotel.hotelNo($scope);

	});
};

