# Basic Development Flow: Controller to View

1. static html
2. controller.js (using $scope)
3. using $scope in view (simpleCheckIn.html)
	ng-repeat: iterate item through a list

# Scope

- local scope: $scope, can access within controller only
- global scope: $rootScope, can be access accross the application

# Using ngCordova

1. Installation of Bower
	`npm install -g bower`

2. Installation of Git
	`Download & Install Git at https://git-scm.com/`

3. Installation of ngCordova
	`Go to working folder
	For Win: bower install ngCordova
	For Mac: bower install ngCordova --allow-root`

5. Configure ngCordova
	`<script src="lib/ngCordova/dist/ng-cordova.min.js"></script>`
	`add 'ngCordova' in app.js, angular.module('app',['ngCordova']);`

6. Set Platform
	`ionic platform add [ios|android]`

7. Install/Uninstall the ngCordova Plugins
	`cordova plugin add ......`
	`cordova plugin remove .....`

# Geolocation

1. Installation
	`cordova plugin add cordova-plugin-geolocation`

2. Injection in controller
	`.controller('addNewCheckInCtrl', function($scope, $cordovaGeolocation)...`

3. getCurrentPosition(posOptions)
	`... position.coords.longitude`
	`... position.coords.latitude`

# Local Storage / Session Factory

1. Define in services.js

2. Pass in 
  `.run(function($rootScope, Session){
		$rootScope.Session = Session;
	})`

# Passing parameters between pages

1. In route.js
	at `url: '/route/:id'`

2. Injection in controller
	`.controller('yourController',function($scope, $stateParams))....`

# Ionic Loading

1. Injection in Controller
	`.controller('someCtrl', function(){$scope, $ionicLoading})`

2. To display
	`$ionicLoading.show();`

3. To hide
	`$ionicLoading.hide();`

4. Customize
	`$ionicLoading.show({
		template: 'Loading...'
	});`

# Icons

## Location 
	
	1. Android: platforms/android/res
	2. IOS: 


# AngularJs Usage

1. ng-repeat
2. ng-if
3. ng-model
4. ng-app
5. ng-src
6. ng-bind-html

