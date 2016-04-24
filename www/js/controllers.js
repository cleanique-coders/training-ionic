angular.module('app.controllers', [])

.run(function($rootScope, Session){
	// session can be use in any controllers
	$rootScope.Session = Session;
})
  
.controller('simpleCheckInCtrl', function($scope) {

  // handle delete check in
  $scope.removeCheckin = function(checkin) {
      if(confirm('Are you sure want to delete this check in?')) {
          $scope.Session.checkins.splice($scope.Session.checkins.indexOf(checkin), 1);
      }
  };

	console.log($scope.Session);
	// set title for page via $scope
	$scope.title = 'my simple check in app';

	// a list of checkins in $scope
	$scope.checkins = [
	    {
	      id: 1,
	      latitude: 0,
	      longitude: 0,
	      address: 'Microsoft Malaysia, Tower 1, KLCC',
	      descriptions: 'I was here 1',
	    },
	    {
	      id: 2,
	      latitude: 0,
	      longitude: 0,
	      address: 'Microsoft Malaysia, Tower 2, KLCC',
	      descriptions: 'I was here 2',
	    },
	    {
	      id: 3,
	      latitude: 0,
	      longitude: 0,
	      address: 'Microsoft Malaysia, Tower 3, KLCC',
	      descriptions: 'I was here 3',
	    }
	];
	//console.log($scope);
})
   
.controller('addNewCheckInCtrl', function(
	$scope, 
	$cordovaGeolocation, 
	$state,
	reverseGeocoder,
	$ionicLoading) {

	$scope.latitude = '';
    $scope.longitude = '';
    $scope.address = '';
    $scope.description = '';
    $scope.map = '';

    $ionicLoading.show();
	// on load page
	// get gps location using cordovaGeoLocation
	var posOptions = {timeout: 10000, enableHighAccuracy: true};
  	$cordovaGeolocation
    .getCurrentPosition(posOptions)
    .then(function (position) {
      $scope.latitude = position.coords.latitude;
      $scope.longitude = position.coords.longitude;

      reverseGeocoder
      	.getAddress($scope.latitude, $scope.longitude)
      	.then(function(address){
      		$scope.address = address.text;
      		$scope.map = address.map;
      		$ionicLoading.hide();
      	},function(){
      		alert('Error getting address location');
      		$ionicLoading.hide();
      	});

    }, function(err) {
      // error
      $ionicLoading.hide();
    });

    $scope.save = function() {
    	var _data = {
    		latitude: $scope.latitude,
            longitude: $scope.longitude,
            address: $scope.address,
            description: $scope.description,
            map: $scope.map
    	};

    	$scope.Session.checkins.unshift(_data);
    	console.log($scope.Session);
    	$state.go('simpleCheckIn');
    }
})
   
.controller('checkInDetailsCtrl', function($scope, $stateParams) {
	$scope.checkin = $scope.Session.checkins.reduce(function(carry, checkin){
        if(checkin.$$hashKey == $stateParams.id)
            carry = checkin;
        return carry;
    }, {});
    console.log($scope.checkin, $stateParams);
})
 