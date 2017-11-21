module.exports = function(m){
	m.factory('accommodation', function($timeout){
		return {
			hotelName:function(scope){
				$timeout(function(){
					scope.hotel = 'some hotel';
				}, 3000)
				return '---';
			},
			hotelNo:function(scope){
				$timeout(function(){
					scope.room = '1013';
				}, 3000);
				return '---';
			}
		};
	});
};

